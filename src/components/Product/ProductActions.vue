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
  import { EventBus } from '@/event-bus';

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
        EventBus.$emit('addItemCart', this.productId);
      }
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
</style>