<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/TopView/TopView'
import SalesView from '../components/SalesView/SalesView'
import MapView from '../components/MapView/MapView'
import BottomView from '../components/BottomView/BottomView'
import { wordcloud, screenData, mapScatter } from '../api'
export default {
  name: 'Home',
  data () {
    return {
      reportData: null,
      wordCloud: null,
      mapScatter: null
    }
  },
  methods: {
    getReportData () {
      return this.reportData
    },
    getWordCloud () {
      return this.wordCloud
    },
    getMapScatter () {
      return this.mapScatter
    }
  },
  provide () {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapScatter: this.getMapScatter
    }
  },
  components: { BottomView, MapView, SalesView, TopView },
  mounted () {
    wordcloud().then(data => { this.wordCloud = data })
    screenData().then(data => { this.reportData = data })
    mapScatter().then(data => { this.mapScatter = data })
  }
}
</script>

<style>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
