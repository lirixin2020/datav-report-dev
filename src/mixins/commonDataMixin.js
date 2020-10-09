function format (v) {
  const rep = /\d{1,3}(?=(\d{3}) + $)/g
  return `${v}`.replace(rep, '$&,')
}
function wrapperObject (o, k) {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}
function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : 0
}
function wrapperOriginalNumber (o, k) {
  return o && o[k] ? o[k] : 0
}
function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}
function wrapperMoney (o, k) {
  return o && o[k] ? `￥ ${format(o[k])}` : '￥ 0.00'
}
function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}
export default {
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
  methods: {
    format (v) {
      return format(v)
    }
  },
  computed: {
    mapData () {
      return this.getMapData()
    },
    wordCloud () {
      return this.getWordCloud()
    },
    reportData () {
      return this.getReportData()
    },
    salesToday () {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay () {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastToday () {
      return wrapperNumber(this.reportData, 'orderLastToday')
    },
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUser () {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate () {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis () {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday () {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber () {
      return wrapperOriginalNumber(this.reportData, 'userTodayNumber')
    },
    userLastMonth () {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay () {
      return wrapperPercentage(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth () {
      return wrapperPercentage(this.reportData, 'userGrowthLastMonth')
    },
    orderFullYear () {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis () {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank () {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear () {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis () {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank () {
      return wrapperArray(this.reportData, 'userRank')
    },
    category1 () {
      return wrapperObject(this.reportData, 'category.data1')
    },
    category2 () {
      return wrapperObject(this.reportData, 'category.data2')
    }
  }
}
