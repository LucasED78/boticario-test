<template>
  <nav class="nav">
    <Logo />
    <NavigationItems />
    
  </nav>
</template>

<script>
  import Logo from './Logo.vue';
  import NavigationItems from './NavigationItems.vue';
  

  export default {
    components: {
      NavigationItems,
      Logo
    }
  }
</script>

<style scoped>
  .nav {
    width: 100vw;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 0 10px lightgrey;
    z-index: 10;
  }
</style>