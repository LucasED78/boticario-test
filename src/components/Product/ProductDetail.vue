<template>
  <div class="grid">
    <ProductGallery :images="['https://images-submarino.b2w.io/produtos/01/00/img/134385/6/134385671_1GG.jpg', 'https://images-submarino.b2w.io/produtos/01/00/img/134385/6/134385671_1GG.jpg', 'https://images-submarino.b2w.io/produtos/01/00/img/134385/6/134385671_1GG.jpg', 'https://images-submarino.b2w.io/produtos/01/00/img/134385/6/134385671_1GG.jpg']" />
    <ProductDescription :product="{ title: 'sadasdasdasdas', description: 'lorem' }" />
  </div>
</template>

<script>
  import ProductImage from './ProductImage.vue'
  import ProductGallery from './ProductGallery.vue'
  import ProductDescription from './ProductDescription.vue';

  export default {
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
    grid-template-columns: repeat(2, 465px);
    grid-gap: 20px;
  }
</style>