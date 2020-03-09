import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Page1 from './pages/Page1.vue'
import Page2 from './pages/Page2.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/', redirect: { name: "Page1" }},
    { path: '/page1', name: "Page1", component: Page1},
    { path: '/page2', name: "Page2", component: Page2}
]

const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
