<template>
  <Card class="product__card" :style="{backgroundImage: `url(${product.images[0].imageUrl})`}">
    <CardBody class="">
      <CardTitle :title="product.name" />
      <div class="product__price">
        <CardText :content="'R$' + product.Value " />
        <FloatingButton>
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

  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    components: {
      Card,
      CardTitle,
      CardBody,
      CardText,
      FloatingButton
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