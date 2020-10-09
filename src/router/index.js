import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap.vue'
import Liquidfill from '../views/Liquidfill.vue'
import WordCloud from '../views/WordCloud.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/liquidfill',
    name: 'Liquidfill',
    component: Liquidfill
  },
  {
    path: '/wordcloud',
    name: 'WordCloud',
    component: WordCloud
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
