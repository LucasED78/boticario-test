<template>
  <div class="card__body">
    <slot></slot>
  </div>
</template>

<style scoped>
  .card__body {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #2EA6E6;
    border-radius: 0 0 20px 20px;
  }
</style>