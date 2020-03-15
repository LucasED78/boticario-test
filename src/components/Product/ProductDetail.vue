<template>
  <div class="grid">
    <ProductGallery :images="product.imageUrl" />
    <ProductDescription :product="product" />
  </div>
</template>

<script>
  import ProductImage from './ProductImage.vue'
  import ProductGallery from './ProductGallery.vue'
  import ProductDescription from './ProductDescription.vue';

  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    components: {
      ProductGallery,
      ProductImage,
      ProductDescription
    }
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 110px;
    grid-row-gap: 20px;
  }
</style>