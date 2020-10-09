<template>
  <div id="container"/>
</template>

<script>
import 'echarts-liquidfill'
export default {
  name: 'Liquidfill',
  mounted () {
    const data = [0.68]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data
      }]
    })
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
