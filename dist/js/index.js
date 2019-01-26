import Vue from 'vue'
import router from './routes/route'
import './service-worker/index'
// delete upper line for remove Service Worker in your bundle
import '../scss/index.scss'
new Vue({
  el: "#app",
  router,
  render: h => h('router-view')
});