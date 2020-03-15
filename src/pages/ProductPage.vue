<template>
  <ContentWrapper>
    <Loading v-if="loading" />
    <ProductDetail v-if="product" :product="product" />
  </ContentWrapper>
</template>

<script>
  import ContentWrapper from '@/components/ContentWrapper.vue';
  import ProductDetail from '@/components/Product/ProductDetail.vue';
  import Loading from '@/components/Loading/Loading.vue';
  import ProductService from '@/services/ProductsService';

  export default {
    data(){
      return {
        loading: false,
        product: null
      }
    },
    components: {
      ContentWrapper,
      ProductDetail,
      Loading
    },
    async created(){
      try {
        this.loading = true;

        const { productId } = this.$route.params;

        this.product = await ProductService.getById(productId);

        this.loading = false;
      } catch(e){
        this.loading = false;
        
        console.error(e);
      }
    }
  }
</script>