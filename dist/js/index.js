import Vue from 'vue'
import router from './routes/route'
import App from './App.vue'
import './service-worker/index'
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
