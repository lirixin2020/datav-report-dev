<template>
  <common-card
    title="累积订单量"
    :value="orderToday">
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">{{orderLastToday}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  mixins: [commonCardMixin, commonDataMixin],
  name: 'TotalOrders',
  methods: {
    getOptions () {
      return this.orderTrend.length > 0 ? {
        xAxis: {
          type: 'category',
          boundaryGap: false
          // show: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: this.orderTrend,
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      } : null
    }
  }
}
</script>

<style scoped>

</style>
