<template>
  <button class="button">
    {{ content }}
  </button>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: 'Button'
      }
    }
  }
</script>

<style scoped>
  .button {
    border: none;
    border-radius: 30px;
    background-color: #2EE6C1;
    color: white;
    font-size: 22px;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
  }
</style>