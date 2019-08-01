import Vue from 'vue'
import Router from 'vue-router'


import PrivatePage from '@/components/PrivatePage'


Vue.use(Router)

let routes = [
  {
    path: '/private-page',
    name: 'PrivatePage',
    components: PrivatePage
  }
]

export default new Router({ routes })
