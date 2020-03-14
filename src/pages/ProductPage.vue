<template>
  <ContentWrapper>
    <ProductDetail />
  </ContentWrapper>
</template>

<script>
  import ContentWrapper from '@/components/ContentWrapper.vue';
  import ProductDetail from '@/components/Product/ProductDetail.vue';

  export default {
    components: {
      ContentWrapper,
      ProductDetail
    },
    created: function(){
      console.log(this.$route.params.productId);
    }
  }
</script>