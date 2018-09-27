import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import NotFound from '../components/global/NotFound.vue'

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/'
        }
      ]
    },
    {
      path: '*', component: NotFound
    }
  ],
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
});