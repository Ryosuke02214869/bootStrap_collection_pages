import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GridSamples from '../views/layout/GridSamples.vue'
import GridBuilder from '../views/layout/GridBuilder.vue'
import Containers from '../views/layout/Containers.vue'

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
    },
    {
      path: '/layout/grid-builder',
      name: 'grid-builder',
      component: GridBuilder
    },
    {
      path: '/layout/containers',
      name: 'containers',
      component: Containers
    }
  ]
})

export default router
