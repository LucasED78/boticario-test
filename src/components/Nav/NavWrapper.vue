<template>
  <nav class="nav">
    <!-- <NavigationItems /> -->
    <SideDrawer
      :backdropClickedHandler="() => showSidedrawer = !showSidedrawer" 
      :showBackdrop="showSidedrawer" />
  </nav>
</template>

<script>
  import SideDrawer from './Sidedrawer.vue';
  import NavigationItems from './NavigationItems.vue';
  

  export default {
    data() {
      return {
        showSidedrawer: true
      }
    },
    components: {
      SideDrawer,
      // NavigationItems,
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