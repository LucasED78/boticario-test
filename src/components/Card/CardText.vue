<template>
  <p class="card__text">
    {{ content }}
  </p>
</template>

<script>
  export default {
    props: {
      content: String
    }
  }
</script>

<style scoped>
  .card__text {
    color: white;
    margin: 10px 0;
    font-size: 1rem;
  }
</style>