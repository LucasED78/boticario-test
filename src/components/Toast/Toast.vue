<template>
  <transition name="slide">
    <div 
      :class="classes"
      v-if="display">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return {
        display: true,
      }
    },
    props: {
      modifier: {
        type: String,
        default: ''
      },
      seconds: {
        type: Number,
        default: 1000
      }
    },
    computed: {
      classes(){
        return `toast ${this.modifier}`;
      }
    },
    mounted(){
      setTimeout(() => this.display = false, this.seconds)
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 170px;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    max-width: 300px;
    min-height: 50px;
    padding: 20px;
    color: white;
    font-size: 1.1rem;
    z-index: 10;
    letter-spacing: .05rem;
    text-align: center;
    line-height: calc(15px * 1.5);
  }

  .toast--success { 
    background-color: #67E6C1; 
    box-shadow: 0px 0px 5px #67E6C1;
  }

  .toast--danger { 
    background-color: #ef665d;
    box-shadow: 0px 0px 5px #ef665d; 
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 1s;
  }

  .slide-enter-to { transform: translateY(0); }

  .slide-leave-to { transform: translateY(-100vh) }
</style>