<template>
  <img :src="imageUrl" alt="product image">
</template>

<script>
  export default {
    props: {
      imageUrl: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  img { border-radius: 20px; }
</style>