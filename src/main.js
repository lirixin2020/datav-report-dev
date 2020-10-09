import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vcharts.js'
import './plugins/element.js'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import './style/index.css'

Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)

createApp(App).use(router).mount('#app')
