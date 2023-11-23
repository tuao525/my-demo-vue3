/*
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-05-06 15:09:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 15:45:39
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/baseView',
    name: 'baseView',
    component: () => import('../views/basic/BaseView.vue')
  },
  {
    path: '/computedView',
    name: 'computedView',
    component: () => import('../views/basic/ComputedView.vue')
  },
  {
    path: '/listRender',
    name: 'listRender',
    component: () => import('../views/basic/ListRender.vue')
  },
  {
    path: '/formInBind',
    name: 'formInBind',
    component: () => import('../views/basic/FormInBind.vue')
  },
  {
    path: '/watchDemo',
    name: 'watchDemo',
    component: () => import('../views/basic/WatchDemo.vue')
  },
  {
    path: '/templeteReference',
    name: 'templeteReference',
    component: () => import('../views/basic/TempleteReference.vue')
  },
  {
    path: '/componentBasis',
    name: 'componentBasis',
    component: () => import('../views/basic/ComponentBasis.vue')
  },
  {
    path: '/incidentView',
    name: 'incidentView',
    component: () => import('../views/basic/IncidentView.vue')
  },
  {
    path: '/vModel',
    name: 'vModel',
    component: () => import('../views/basic/VModel.vue')
  },
  {
    path: '/transmitAttribute',
    name: 'transmitAttribute',
    component: () => import('../views/basic/TransmitAttribute.vue')
  },
  {
    path: '/slotView',
    name: 'slotView',
    component: () => import('../views/basic/SlotView.vue')
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    component: () => import('../views/basic/ProvideInject.vue')
  },
  {
    path: '/combinedFunction',
    name: 'combinedFunction',
    component: () => import('../views/basic/CombinedFunction.vue')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('../views/basic/Transition.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../views/todos')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/todolist')
  },
  {
    path: '/onClickOutside',
    name: 'onClickOutside',
    component: () => import('../views/vueuse/OnClickOutside.vue')
  },
  {
    path: '/useDark',
    name: 'useDark',
    component: () => import('../views/vueuse/UseDark.vue')
  },
  {
    path: '/useStorage',
    name: 'useStorage',
    component: () => import('../views/vueuse/UseStorage.vue')
  },
  {
    path: '/useElementBounding',
    name: 'useElementBounding',
    component: () => import('../views/vueuse/UseElementBounding.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
