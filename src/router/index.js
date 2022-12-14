import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/views/HomeView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
