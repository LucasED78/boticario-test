<template>
  <button class="floating__button" @click="buttonClickedHandler">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      buttonClickedHandler: {
        type: Function,
        default: ()=>{}
      }
    }
  }
</script>

<style scoped>
  .floating__button {
    padding: 10px;
    position: absolute;
    right: 15px;
    bottom: 26px;
    border: none;
    border-radius: 100%;
    outline: none;
    cursor: pointer;
  }
</style>