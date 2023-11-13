/*
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-05-06 15:09:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:22:51
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/baseView',
    name: 'baseView',
    component: () => import('../views/BaseView.vue')
  },
  {
    path: '/computedView',
    name: 'computedView',
    component: () => import('../views/ComputedView.vue')
  },
  {
    path: '/listRender',
    name: 'listRender',
    component: () => import('../views/ListRender.vue')
  },
  {
    path: '/formInBind',
    name: 'formInBind',
    component: () => import('../views/FormInBind.vue')
  },
  {
    path: '/watchDemo',
    name: 'watchDemo',
    component: () => import('../views/WatchDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
