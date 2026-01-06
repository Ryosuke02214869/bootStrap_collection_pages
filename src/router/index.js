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
import Badges from '../views/components/Badges.vue'
import ProgressBars from '../views/components/ProgressBars.vue'
import InputGroups from '../views/components/InputGroups.vue'
import Breadcrumb from '../views/components/Breadcrumb.vue'
import Pagination from '../views/components/Pagination.vue'
import Tooltip from '../views/components/Tooltip.vue'
import Popover from '../views/components/Popover.vue'
import Carousel from '../views/components/Carousel.vue'
import Offcanvas from '../views/components/Offcanvas.vue'
import Colors from '../views/utilities/Colors.vue'
import Spacing from '../views/utilities/Spacing.vue'
import Typography from '../views/utilities/Typography.vue'
import Borders from '../views/utilities/Borders.vue'
import Shadows from '../views/utilities/Shadows.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // ページ遷移時は常にページトップにスクロール
    return { top: 0 }
  },
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
    {
      path: '/components/badges',
      name: 'badges',
      component: Badges
    },
    {
      path: '/components/progress',
      name: 'progress',
      component: ProgressBars
    },
    {
      path: '/components/input-groups',
      name: 'input-groups',
      component: InputGroups
    },
    {
      path: '/components/breadcrumb',
      name: 'breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/components/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/components/tooltip',
      name: 'tooltip',
      component: Tooltip
    },
    {
      path: '/components/popover',
      name: 'popover',
      component: Popover
    },
    {
      path: '/components/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/components/offcanvas',
      name: 'offcanvas',
      component: Offcanvas
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
    },
    {
      path: '/utilities/typography',
      name: 'typography',
      component: Typography
    },
    {
      path: '/utilities/borders',
      name: 'borders',
      component: Borders
    },
    {
      path: '/utilities/shadows',
      name: 'shadows',
      component: Shadows
    }
  ]
})

export default router
