import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/abode',
      name: 'Abode',
      component: () => import('../views/Abode.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue')
    }
  ]
})

export default router
