<template>
  <div class="product__list">
    <ProductCard 
      v-for="product in products"
      :key="product._id"
      :product="product" 
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
    margin: auto;
  }

  @media (max-width: 880px){
    .product__list {
      grid-template-columns: repeat(2, 355px);
    }
  }

  @media (max-width: 600px){
    .product__list {
      grid-template-columns: 355px;
    }
  }
</style>