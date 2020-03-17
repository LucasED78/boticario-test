<template>
  <div class="product__actions">
    <Button class="action__buy" content="COMPRAR" />

    <IconButton @click.native="iconButtonHandler">
      <font-awesome-icon icon="cart-plus" />
    </IconButton>
  </div>
</template>

<style scoped>
  
</style>

<script>
  import Button from '@/components/Button/Button.vue';
  import IconButton from '@/components/Button/IconButton.vue';

  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    components: {
      Button,
      IconButton
    },
    methods: {
      iconButtonHandler: function(){
        this.$bus.$emit('addItemCart', this.productId);
      }
    },
    destroyed(){
      this.$bus.$off('addItemCart', this.productId);
    }
  }
</script>

<style scoped>
  .action__buy {
    width: 300px;
    height: 60px;
    /* margin: 0 10px; */
  }

  .product__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 750px) {
    .product__actions {
      width: 100vw;
      position: fixed;
      bottom: 0;
      padding: 20px;
      justify-content: space-around;
      background-color: #fff;
      box-shadow: 0px 0px 10px lightgrey;
    }
  }
</style>