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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
