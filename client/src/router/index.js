import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/index'
import test from '@/modules/test/test'
import manager from '@/modules/manager/Home/index'
import user from '@/modules/user/Home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/manager',
      name: 'manager',
      component: manager,
      children: [
        {
          path: '/index',
          name: 'manager',
          component: manager
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [
        {
          path: '/index',
          name: 'user',
          component: user
        }
      ]
    }
  ]
})
