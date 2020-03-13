import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
import page1 from '../components/PageOne.vue'
import page2 from '../components/PageTwo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/page1',
    name: 'Table 1',
    component: page1
  },
  {
    path: '/page2',
    name: 'Table 2',
    component: page2
  }
]

const router = new VueRouter({
  routes
})

export default router
