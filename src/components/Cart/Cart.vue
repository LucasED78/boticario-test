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
  import { EventBus } from '@/event-bus';

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
      EventBus.$on('addItemCart', id => {
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