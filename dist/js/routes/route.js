import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import NotFound from '../components/global/NotFound.vue'
import Main from '../components/pages/Main.vue'

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  // remove comments for production tip
  // mode: 'history',
  routes: [{
      path: '/',
      component: App,
      children: [{
        path: '/',
        component: Main
      }]
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});