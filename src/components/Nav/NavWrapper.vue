<template>
  <nav class="nav">
    <Toolbar />
    <SideDrawer
      :backdropClickedHandler="() => showSidedrawer = !showSidedrawer" 
      :showBackdrop="showSidedrawer"
      :toggleClickedHandler="() => showSidedrawer = !showSidedrawer" />
  </nav>
</template>

<script>
  import SideDrawer from './Sidedrawer.vue';
  import Toolbar from './Toolbar.vue';
  

  export default {
    data() {
      return {
        showSidedrawer: false
      }
    },
    components: {
      SideDrawer,
      Toolbar,
    }
  }
</script>

<style scoped>
  .nav {
    width: 100vw;
    min-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 0 10px lightgrey;
    z-index: 10;
    padding-bottom: 10px;
  }
</style>