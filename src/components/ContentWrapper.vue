<template>
  <div class="content__wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
  .content__wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 170px;
  }
</style>