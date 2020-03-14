<template>
  <button class="icon__button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .icon__button {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 100%;
    background-color: #2EE6C1;
    color: white;
    font-size: 22px;
    letter-spacing: 1px;
  }
</style>