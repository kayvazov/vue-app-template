import Vue from 'vue'
import App from './App.vue'
import router from './routes/route'
import './service-worker/index'
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

const route = router;
route.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});