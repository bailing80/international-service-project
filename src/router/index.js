import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import menuPage from '@/views/menuPage'
import option from './routers/option'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
    {
      path: '/menuPage',
      name: 'menuPage ',
      children: [
        ...option
      ],
      component: menuPage
    }
  ]
});
export default router;
