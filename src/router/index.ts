import Vue from 'vue'
import VueRouter from 'vue-router'
import Inactives from '../views/Inactives.vue'
import Workers from '../views/Workers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inactives',
    name: 'Inactives',
    component: Inactives
  },
  {
    path: '/workers',
    name: 'Workers',
    component: Workers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
