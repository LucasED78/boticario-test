<template>
  <Card class="product__card" style="background-image: url(https://thumbs.dreamstime.com/b/beautiful-dandelion-flower-flying-feathers-colorful-bokeh-background-macro-shot-summer-nature-scene-beautiful-dandelion-147400154.jpg);">
    <CardBody class="">
      <CardTitle title="Produto XPTO" />
      <div class="product__price">
        <CardText content="R$ 20,00" />
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
    background-size: cover;
  }

  .product__price {
    margin-top: auto;
  }
</style>