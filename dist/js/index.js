import Vue from 'vue'
import router from './routes/route'
import './service-worker/index'
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
new Vue({
  el: "#app",
  router,
  render: h => h('router-view')
});
