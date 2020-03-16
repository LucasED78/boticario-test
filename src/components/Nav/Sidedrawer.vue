<template>
  <Fragment>
    <Backdrop :backdropClickedHandler="backdropClickedHandler" :show="showBackdrop" />

    <ul :class="`sidedrawer ${showBackdrop ? 'opened' : 'closed'}`">
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

      <!-- <NavigationItem class="flex__right">
        <SearchBar />
      </NavigationItem>

      <NavigationItem>
        <Cart />
      </NavigationItem> -->
    </ul>
  </Fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment';
  import NavigationItem from './NavigationItem.vue';
  import Backdrop from '@/components/Backdrop/Backdrop.vue';

  export default {
    components: {
      Fragment,
      NavigationItem,
      Backdrop
    },
    props: {
      backdropClickedHandler: {
        type: Function,
        required: true
      },
      showBackdrop: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .sidedrawer {
    width: 20%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 30;
    transition: transform 1s;
  }

  .opened { transform: translateX(0); }

  .closed { transform: translateX(-1000px); }

  .sidedrawer li {
    margin: 20px 10px;
  }
</style>