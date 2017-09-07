import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import OrderListPage from './pages/orderList'
import DetailPage from './pages/detail'

import DetailAnaPage from './pages/details/analysis.vue'
import DetailCouPage from './pages/details/count.vue'  
import DetailForPage from './pages/details/forecast.vue'
import DetailPubPage from './pages/details/publish.vue'

Vue.use(VueRouter)
Vue.use(VueResource)


let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      redirect: '/detail/analysis',
      component: DetailPage,
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        }
        ,
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: {Layout}
})

