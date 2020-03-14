<template>
  <div>
    <NavWrapper>
    </NavWrapper>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavWrapper from './components/Nav/NavWrapper.vue';

  export default {
    components: {
      NavWrapper
    }
  }
</script>