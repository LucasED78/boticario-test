<template>
  <Card 
    class="product__card" 
    :style="{backgroundImage: `url(${product.imageUrl[0]})`}" 
    @click.native.self="productClickedHandler">
    <CardBody class="">
      <CardTitle :title="limitedName" />
      <div class="product__price">
        <CardText :content="'R$' + product.price " />
        <FloatingButton :buttonClickedHandler="buttonClickedHandler">
          <font-awesome-icon icon="plus" />
        </FloatingButton>
      </div>
    </CardBody>
  </Card>
</template>

<script>
  import Card from '../Card/Card.vue';
  import CardTitle from '../Card/CardTitle.vue'
  import CardBody from '../Card/CardBody.vue';
  import CardText from '../Card/CardText.vue';
  import FloatingButton from '../Button/FloatingButton.vue'
  import StringUtil from '@/utils/StringUtil';

  export default {
    props: {
      product: {
        type: Object,
        required: true
      },
      floatingButtonClicked: {
        type: Function
      }
    },
    components: {
      Card,
      CardTitle,
      CardBody,
      CardText,
      FloatingButton
    },
    computed: {
      limitedName(){
        return StringUtil.limitCharacters(this.product.name, 24);
      }
    },
    methods: {
      buttonClickedHandler(){
        this.$bus.$emit('floatingButtonClicked', this.product._id);
      },
      getFullPath(id){
        return `/product/${id}`;
      },
      productClickedHandler(){
        this.$router.push(this.getFullPath(this.product._id));
      }
    }
  }
</script>

<style scoped>
  .product__card {
    height: 390px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: contain;
  }

  .product__price {
    margin-top: auto;
  }
</style>