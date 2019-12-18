import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import NotFound from '../components/global/NotFound'
import Main from '../components/pages/Main'

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  // remove comments for production tip
  // mode: 'history',
  routes: [{
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: Main
        }
      ]
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