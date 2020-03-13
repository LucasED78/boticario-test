<template>
  <div>
    <NavWrapper>
      <Logo />
    </NavWrapper>
    <ContentWrapper>
      <Loading v-if="loading" />
      <!-- <ProductList 
       :products="products"
       v-if="products.length"
      /> -->
    </ContentWrapper>
  </div>
</template>

<script>
  import ContentWrapper from './components/ContentWrapper.vue'
  import NavWrapper from './components/Nav/NavWrapper.vue'
  import Logo from './components/Nav/Logo.vue'
  import ProductList from './components/Product/ProductList.vue';
  import ProductsService from './services/ProductsService';
  import Loading from './components/Loading/Loading.vue';
  
  export default {
    data(){
      return {
        products: [],
        loading: false
      }
    },
    components: {
      ContentWrapper,
      NavWrapper,
      Logo,
      ProductList,
      Loading
    },
    created: async function(){
      try {
        this.loading = true;

        this.products = await ProductsService.getAll();
        
        // this.loading = false;
      } catch(e){
        this.loading = false;
        console.log(e);
      }
    }
  }
</script>