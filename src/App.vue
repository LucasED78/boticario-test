<template>
  <div>
    <NavWrapper>
      <Logo />
    </NavWrapper>
    <ContentWrapper>
      <ProductList :products="[{id: 1}, {id: 2}, {id: 3}, {id: 3}]" />
    </ContentWrapper>
  </div>
</template>

<script>
  import ContentWrapper from './components/ContentWrapper.vue'
  import NavWrapper from './components/Nav/NavWrapper.vue'
  import Logo from './components/Nav/Logo.vue'
  import ProductList from './components/Product/ProductList.vue';
  
  export default {
    components: {
      ContentWrapper,
      NavWrapper,
      Logo,
      ProductList
    }
  }
</script>