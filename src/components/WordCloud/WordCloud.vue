<template>
<ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"/>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  mixins: [commonDataMixin],
  name: 'WordCloud',
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '慕课网',
          value: 100
        }]
      },
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
      }
    }
  },
  watch: {
    wordCloud () {
      const data = []
      this.wordCloud.forEach(item => {
        data.push({
          name: item.word,
          value: item.count
        })
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  }
}
</script>

<style scoped>

</style>
