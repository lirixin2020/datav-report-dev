<template>
  <common-card
    title="累计用户数"
    :value="userToday">
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">{{userGrowthLastDay}}</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">{{userGrowthLastMonth}}</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  mixins: [commonCardMixin, commonDataMixin],
  name: 'TotalUsers',
  methods: {
    getOptions () {
      return {
        series: [{
          name: '上月平台用户数',
          type: 'bar',
          data: this.userLastMonth,
          barWidth: 10,
          stack: '总量',
          itemStyle: {
            color: '#45c946'
          }
        }, {
          name: '今日平台用户数',
          type: 'bar',
          data: this.userTodayNumber,
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          data: this.userLastMonth,
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {

                  d: 'M859.8528 292.9664H164.1472c-40.1408 0-60.3136 48.5376-31.8464 77.0048L480.1536 717.824c17.6128 17.6128 46.1824 17.6128 63.7952 0l347.8528-347.8528c28.3648-28.4672 8.2944-77.0048-31.9488-77.0048z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M164.1472 731.0336h695.808c40.1408 0 60.3136-48.5376 31.8464-77.0048L543.8464 306.176c-17.6128-17.6128-46.1824-17.6128-63.7952 0L132.1984 654.0288c-28.3648 28.4672-8.2944 77.0048 31.9488 77.0048z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }],
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }

</style>

<svg t="1600496229739" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4129" width="200" height="200"><path d="" p-id="4130"></path></svg>
