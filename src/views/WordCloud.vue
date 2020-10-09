<template>
  <div id="container"/>
</template>

<script>
import 'echarts-wordcloud'
export default {
  name: 'WordCloud',
  mounted () {
    const data = [
      {
        name: '数据可视化',
        value: 100
      },
      {
        name: '慕课网',
        value: 75
      },
      {
        name: 'sam',
        value: 50
      }
    ]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data,
        shape: 'circle',
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
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
