<template>
  <div class="product__gallery">
    <ProductImage :imageUrl="images[0]" />

    <div class="product__thumbnail">
      <ProductImage 
        class="image__thumbnail"
        v-for="image in images.splice(1)"
        :key="getIndex(image)"
        :imageUrl="image" />
    </div>
  </div>
</template>

<script>
  import ProductImage from './ProductImage.vue';

  export default {
    props: {
      images: {
        type: Array,
        default: () => []
      }
    },
    components: {
      ProductImage
    },
    methods: {
      getIndex(el){
        return this.images.indexOf(el);
      }
    }
  }
</script>

<style scoped>
  .product__thumbnail {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .image__thumbnail { height: 142px; }
</style>