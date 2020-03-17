<template>
  <ContentWrapper>
     <Loading v-if="loading" />
     <Toast modifier="toast--danger" v-if="error">
       {{ error }}
     </Toast>
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
  import Toast from '@/components/Toast/Toast.vue';

  export default {
    data(){
      return {
        products: [],
        loading: false,
        error: ''
      }
    },
    components: {
      ContentWrapper,
      ProductList,
      Loading,
      Toast
    },
    async created(){
      try {
        this.loading = true;

        this.products = await ProductsService.getAll();

        this.loading = false;
      } catch(e){
        this.error = "Desculpe, ocorreu um erro ao carregar os produtos";
        
        this.loading = false;
        
      }
    },
    mounted(){
      this.$bus.$on('floatingButtonClicked', id => {
        this.$bus.$emit('addItemCart', id);
      });
    },
    destroyed(){
      this.$bus.$off('floatingButtonClicked');
    },
  }
</script>