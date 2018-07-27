import Vue from 'vue'
import VueRouter from 'vue-router'

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
          path: '/', component: Home, meta: { title: 'Главная | Ресторан в Воронеже Мангал-House (Хаус)' },
        }
      ]
    },
    {
      path: '*', component: NotFound, meta: { title: '404 ошибка! Такой страницы не существует' }
    }
  ],
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
});