<template>
  <ul class="nav__menu">
    <router-link to="/">
      <Logo />
    </router-link>

    <NavigationItem class="toolbar__item">
      <router-link to="/test">
        Item to menu
      </router-link>
    </NavigationItem>

    <NavigationItem class="toolbar__item">
      Item do menu
    </NavigationItem>

    <NavigationItem class="toolbar__item">
      Item do menu
    </NavigationItem>

    <NavigationItem class="toolbar__item">
      Item do menu
    </NavigationItem>

    <NavigationItem class="toolbar__item nav__item--full-width nav__item--auto-right">
      <SearchBar modifier="searchbar--full-width" />
    </NavigationItem>

    <NavigationItem class="toolbar__item">
      <Cart />
    </NavigationItem>
  </ul>
</template>

<script>
  import NavigationItem from './NavigationItem.vue'
  import SearchBar from '../SearchBar/SearchBar.vue';
  import Cart from '../Cart/Cart.vue';
  import Logo from './Logo.vue';
  
  export default {
    components: {
      NavigationItem,
      Logo,
      SearchBar,
      Cart
    }
  }
</script>

<style scoped>
  .nav__menu {
    display: flex;
    flex: 3;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    list-style-type: none;
    margin: 0 10px;
    padding: 0;
    letter-spacing: 1px;
  }

  .toolbar__item:not(.nav__item--auto-right)  { 
    margin: 0 10px;
  }

  .nav__item--auto-right { margin-left: auto; }

  @media (max-width: 900px) {
    .nav__item--full-width {
      order: 5;
      width: 100%;
    }

    .nav__item >>> .searchbar--full-width {
      width: 100%;
    }

    .nav__item:last-of-type {
      margin: 0;
      margin-left: auto;
      margin-right: 10px;
    }
  }

  @media (max-width: 700px) {
    .nav__menu { display: none; }
  }
</style>