import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import FontAwesomeIcon from './assets/icons';
import router from './routes/routes';
import './global.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter)

new Vue({
  el: '#root',
  router,
  render: h => h(App)
}).$mount()