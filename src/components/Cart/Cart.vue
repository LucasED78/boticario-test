<template>
  <span @click="cartClickedHandler">
    <font-awesome-icon icon="cart-plus" />
  </span>
</template>

<script>
  export default {
    props: {
      cartClickedHandler: {
        type: Function,
        default: ()=>{}
      }
    }
  }
</script>

<style scoped>

</style>