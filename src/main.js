import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});
