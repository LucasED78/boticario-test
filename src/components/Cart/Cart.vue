<template>
  <div class="cart">
    <Notification :itemCount="cart.length" />
    <span @click="cartClickedHandler">
      <font-awesome-icon icon="cart-plus" />
    </span>
  </div>
</template>

<script>
  import Notification from '@/components/Notification/Notification.vue'

  export default {
    data(){
      return {
        cart: []
      }
    },
    props: {
      cartClickedHandler: {
        type: Function,
        default: ()=>{}
      }
    },
    components: {
      Notification
    },
    created: function(){
      this.$bus.$on('addItemCart', id => {
        this.cart.push(id);
      })
    }
  }
</script>

<style scoped>
  .cart {
    position: relative;
  }
</style>