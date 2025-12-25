import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GridSamples from '../views/layout/GridSamples.vue'
import GridBuilder from '../views/layout/GridBuilder.vue'
import Containers from '../views/layout/Containers.vue'
import Flexbox from '../views/layout/Flexbox.vue'
import Buttons from '../views/components/Buttons.vue'
import Cards from '../views/components/Cards.vue'
import Navbar from '../views/components/Navbar.vue'
import Modal from '../views/components/Modal.vue'
import Forms from '../views/components/Forms.vue'
import Alerts from '../views/components/Alerts.vue'
import Dropdown from '../views/components/Dropdown.vue'
import Tabs from '../views/components/Tabs.vue'
import Collapse from '../views/components/Collapse.vue'
import FormValidation from '../views/components/FormValidation.vue'
import Colors from '../views/utilities/Colors.vue'
import Spacing from '../views/utilities/Spacing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // Layout pages
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
    },
    {
      path: '/layout/flexbox',
      name: 'flexbox',
      component: Flexbox
    },
    // Component pages
    {
      path: '/components/buttons',
      name: 'buttons',
      component: Buttons
    },
    {
      path: '/components/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/components/navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/components/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/components/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/components/alerts',
      name: 'alerts',
      component: Alerts
    },
    {
      path: '/components/dropdown',
      name: 'dropdown',
      component: Dropdown
    },
    {
      path: '/components/tabs',
      name: 'tabs',
      component: Tabs
    },
    {
      path: '/components/collapse',
      name: 'collapse',
      component: Collapse
    },
    {
      path: '/components/form-validation',
      name: 'form-validation',
      component: FormValidation
    },
    // Utility pages
    {
      path: '/utilities/colors',
      name: 'colors',
      component: Colors
    },
    {
      path: '/utilities/spacing',
      name: 'spacing',
      component: Spacing
    }
  ]
})

export default router
