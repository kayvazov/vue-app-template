import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/global/NotFound.vue'

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  mode: 'history',
  caseSensitive: true,
  routes: [
    {
      path: '/',
      component: Main,
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