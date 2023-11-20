/*
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-05-06 15:09:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-20 09:52:22
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
  },
  {
    path: '/templeteReference',
    name: 'templeteReference',
    component: () => import('../views/TempleteReference.vue')
  },
  {
    path: '/componentBasis',
    name: 'componentBasis',
    component: () => import('../views/ComponentBasis.vue')
  },
  {
    path: '/incidentView',
    name: 'incidentView',
    component: () => import('../views/IncidentView.vue')
  },
  {
    path: '/vModel',
    name: 'vModel',
    component: () => import('../views/VModel.vue')
  },
  {
    path: '/transmitAttribute',
    name: 'transmitAttribute',
    component: () => import('../views/TransmitAttribute.vue')
  },
  {
    path: '/slotView',
    name: 'slotView',
    component: () => import('../views/SlotView.vue')
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    component: () => import('../views/ProvideInject.vue')
  },
  {
    path: '/combinedFunction',
    name: 'combinedFunction',
    component: () => import('../views/CombinedFunction.vue')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('../views/Transition.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
