import App from './App.vue';
import Vue from 'vue';
import FontAwesomeIcon from './assets/icons'
import './global.css'

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#root',
  render: h => h(App)
}).$mount()