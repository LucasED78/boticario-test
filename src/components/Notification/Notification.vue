<template>
  <div class="notification">
    {{ itemCount }}
  </div>
</template>

<script>
  export default {
    props: {
      itemCount: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .notification {
    min-width: 10px;
    min-height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 100%;
    color: white;
    background-color: red;
    font-size: .7rem;
    font-weight: bold;
  }
</style>