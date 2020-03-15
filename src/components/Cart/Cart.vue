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
  import CartService from '@/services/CartService';

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
    async beforeMount(){
      const data = await CartService.get();

      if (data !== null && data.length !== this.cart.length) {
        this.cart = data;
      }
    },
    async created(){
      this.$bus.$on('addItemCart', async id => {
        this.cart.push(id);
        
        await CartService.save(this.cart);
      })
    }
  }
</script>

<style scoped>
  .cart {
    position: relative;
  }
</style>