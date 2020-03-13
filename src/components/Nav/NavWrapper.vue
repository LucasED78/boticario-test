<template>
  <nav class="nav">
    <Logo />
    <NavigationItems />
    <SearchBar />
  </nav>
</template>

<script>
  import Logo from './Logo.vue';
  import NavigationItems from './NavigationItems.vue';
  import SearchBar from '../SearchBar/SearchBar.vue';

  export default {
    components: {
      NavigationItems,
      Logo,
      SearchBar
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
    box-shadow: 0 0 10px lightgrey;
    z-index: 10;
  }
</style>