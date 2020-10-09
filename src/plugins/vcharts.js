import Vue from 'vue'
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
import 'v-charts/lib/style.css'

Vue.use(VCharts)
Vue.component('ve-line', VeLine)
