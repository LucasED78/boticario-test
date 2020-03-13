import App from './App.vue';
import Vue from 'vue';
import FontAwesomeIcon from './assets/icons'

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#root',
  render: h => h(App)
}).$mount()