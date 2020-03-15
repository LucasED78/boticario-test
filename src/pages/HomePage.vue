<template>
  <ContentWrapper>
     <Loading v-if="loading" />
     <ProductList 
      :products="products"
      v-if="products.length"
     />
   </ContentWrapper>
</template>

<script>
  import ContentWrapper from '@/components/ContentWrapper.vue'
  import ProductList from '@/components/Product/ProductList.vue';
  import ProductsService from '@/services/ProductsService';
  import Loading from '@/components/Loading/Loading.vue';

  export default {
    data(){
      return {
        products: [],
        loading: false
      }
    },
    components: {
      ContentWrapper,
      ProductList,
      Loading
    },
    created: async function(){
      try {
        this.loading = true;

        this.products = await ProductsService.getAll();
        
        this.loading = false;
      } catch(e){
        this.loading = false;
        console.log(e);
      }
    },
    mounted(){
      this.$bus.$on('floatingButtonClicked', id => {
        this.$bus.$emit('addItemCart', id);
      });
    },
    destroyed(){
      this.$bus.$off('floatingButtonClicked');
    }
  }
</script>