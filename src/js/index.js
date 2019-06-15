import Vue from 'vue'
import router from './routes/route'
new Vue({
  el: "#app",
  router,
  render: h => h('router-view')
});