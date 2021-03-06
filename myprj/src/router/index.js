import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/components/Charts'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/Charts',
      component: Charts,
    },
  ]
})
