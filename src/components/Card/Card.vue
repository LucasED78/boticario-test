<template>
  <article class="card">
    <slot></slot>
  </article>
</template>

<style scoped>
  .card {
    border-radius: 20px;
    box-shadow: 0 0 10px lightgray;
    cursor: pointer;
    transition: box-shadow 0.5s;
  }

  .card:hover { box-shadow: 0 0 20px 10px lightgray; }
</style>