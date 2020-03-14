<template>
  <ul class="nav__menu">
    <NavigationItem>
      <router-link to="/test">
        Item to menu
      </router-link>
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

    <NavigationItem class="flex__right">
      <SearchBar />
    </NavigationItem>

    <NavigationItem>
      <Cart />
    </NavigationItem>
  </ul>
</template>

<script>
  import NavigationItem from './NavigationItem.vue'
  import SearchBar from '../SearchBar/SearchBar.vue';
  import Cart from '../Cart/Cart.vue';
  
  export default {
    components: {
      NavigationItem,
      SearchBar,
      Cart
    }
  }
</script>

<style scoped>
  .nav__menu {
    display: flex;
    flex: 3;
    height: 100%;
    align-items: center;
    list-style-type: none;
    margin: 0 50px;
    padding: 0;
    letter-spacing: 1px;
  }

  .flex__right { margin-left: auto; }
</style>