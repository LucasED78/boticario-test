import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ProductPage from '@/pages/ProductPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/product/:productId',
    component: ProductPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;