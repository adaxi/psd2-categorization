import Vue from 'vue'
import Router from 'vue-router'
import ManualCategorization from '@/views/ManualCategorization'
import Analytics from '@/views/Analytics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManualCategorization',
      component: ManualCategorization
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    }
  ]
})
