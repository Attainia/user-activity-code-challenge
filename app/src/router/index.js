import Vue from 'vue'
import Router from 'vue-router'
import Directory from '@/components/Directory'
import ActiveUserDashboard from '@/components/ActiveUserDashboard'
import InactiveUserDashboard from '@/components/InactiveUserDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/active-user-dashboard',
      name: 'ActiveUserDashboard',
      component: ActiveUserDashboard
    },
    {
      path: '/inactive-user-dashboard',
      name: 'InactiveUserDashboard',
      component: InactiveUserDashboard
    }
  ]
})
