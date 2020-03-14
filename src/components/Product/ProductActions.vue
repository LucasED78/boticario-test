<template>
  <div class="product__actions">
    <Button class="action__buy" content="COMPRAR" />

    <IconButton>
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
    components: {
      Button,
      IconButton
    }
  }
</script>

<style scoped>
  .action__buy {
    width: 360px;
    height: 60px;
    /* margin: 0 10px; */
  }

  .product__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>