<template>
  <div class="product__list">
    <ProductCard 
      v-for="product in products"
      :key="product.id"
    />
  </div>
</template>

<script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    components: {
      ProductCard
    }
  }
</script>

<style scoped>
  .product__list {
    display: grid;
    grid-template-columns: repeat(3, 266px);
    grid-gap: 20px;
  }
</style>