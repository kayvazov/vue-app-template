import Vue from 'vue'
import router from './routes/route'
import store from './store/index.js'
import asyncData from './store/api/asyncData'


// router hooks
router.beforeResolve(asyncData({ store, router }));


// Vue instance
new Vue({
  el: "#app",
  router,
  store,
  render: h => h('router-view')
});