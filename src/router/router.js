import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    redirect: {
      name: 'Home'
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@views/home.vue'),
        meta: {
          title: '主页'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

export { routes }
