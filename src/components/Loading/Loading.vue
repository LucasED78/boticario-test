<template>
  <div class="loading">
  </div>
</template>

<style scoped>
  .loading {
    width: 50px;
    height: 50px;
    margin: 20% auto;
    border: 1px solid rgba(46, 166, 230, 0.2);
    border-radius: 100%;
    border-top-color: #2EA6E6;
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>