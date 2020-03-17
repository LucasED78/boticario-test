<template>
  <div class="product__about">
    <h3 class="product__title">
      {{ product.name }}
    </h3>

    <p class="product__description">
      {{ product.description }}
    </p>

    <ProductActions :productId="product._id" />
  </div>
</template>

<script>
  import ProductActions from './ProductActions.vue';

  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    components: {
      ProductActions
    }
  }
</script>

<style scoped>
  .product__about {
    display: flex;
    flex-direction: column;
  }

  .product__title {
    font-size: 32px;
  }

  .product__description {
    font-size: 18px;
    line-height: calc(18px * 1.5);
    margin: 20px 0;
  }

  @media (max-width: 733px) {
    .product__about {
      padding-bottom: 150px;
    }
  }
</style>