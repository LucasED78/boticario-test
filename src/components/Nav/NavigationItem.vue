<template>
  <li class="nav__item">
    <slot></slot>
  </li>
</template>

<style scoped>
  .nav__item {
    color: #707070;
    cursor: pointer;
  }

  .nav__item:not(:last-of-type) { margin: 0 20px; }
</style>