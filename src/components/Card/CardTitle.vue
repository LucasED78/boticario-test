<template>
  <h2 class="card__title">
    {{ title }}
  </h2>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style scoped>
  .card__title {
    color: white;
    margin: 10px 0;
    font-size: 1rem;
    letter-spacing: 0.04rem;
    font-weight: bold;
  }
</style>