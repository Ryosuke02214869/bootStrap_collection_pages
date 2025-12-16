import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GridSamples from '../views/layout/GridSamples.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/layout/grid-samples',
      name: 'grid-samples',
      component: GridSamples
    }
  ]
})

export default router
