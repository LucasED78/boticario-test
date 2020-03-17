<template>
  <Fragment>
    <Backdrop 
      :backdropClickedHandler="backdropClickedHandler" 
      :show="showBackdrop" />

    <ToggleButton 
      :class="buttonClass"
      :toggleClickedHandler="toggleClickedHandler" />

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
  import ToggleButton from './ToggleButton.vue';

  export default {
    components: {
      Fragment,
      Backdrop,
      NavigationItem,
      ToggleButton
    },
    props: {
      backdropClickedHandler: {
        type: Function,
        required: true
      },
      showBackdrop: {
        type: Boolean,
        default: false
      },
      toggleClickedHandler: {
        type: Function,
        required: true
      }
    },
    computed: {
      buttonClass(){
        return `${this.showBackdrop ? 'toggled' : 'hidden'}`;
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
    transition: transform 0.5s;
  }

  .opened { transform: translateX(0); }

  .closed { transform: translateX(-1000px); }

  .sidedrawer li {
    margin: 20px 10px;
  }

  .hidden {
    left: 0;
  }

  .toggled {
    left: 20%;
    z-index: 30;
    top: 0;
  }

  @media (min-width: 701px){
    .sidedrawer { display: none; }
  }
</style>