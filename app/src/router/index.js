import Vue from 'vue'
import Router from 'vue-router'
import Directory from '@/components/Directory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Directory',
      component: Directory
    }
    // {
    //   path: '/active-user-dashboard',
    //   name: 'ActiveUserDashboard',
    //   component: ActiveUserDashboard
    // },
    // {
    //   path: '/',
    //   name: 'InactiveUserDashboard',
    //   component: InactiveUserDashboard
    // }
  ]
})
