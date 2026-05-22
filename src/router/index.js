import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      component: DashboardView
    },
    {
      path: '/contact',
      component: ContactView
    }
  ]
})

export default router