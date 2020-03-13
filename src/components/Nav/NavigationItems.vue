<template>
  <ul class="nav__menu">
    <NavigationItem>
      Item do menu
    </NavigationItem>

    <NavigationItem>
      Item do menu
    </NavigationItem>

    <NavigationItem>
      Item do menu
    </NavigationItem>

    <NavigationItem>
      Item do menu
    </NavigationItem>
  </ul>
</template>

<script>
  import NavigationItem from './NavigationItem.vue'
  
  export default {
    components: {
      NavigationItem
    }
  }
</script>

<style scoped>
  .nav__menu {
    display: flex;
    height: 100%;
    align-items: center;
    list-style-type: none;
    margin: 0 50px;
    padding: 0;
    letter-spacing: 1px;
  }
</style>