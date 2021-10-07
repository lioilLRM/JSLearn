import moment from 'moment'
import lodash from 'lodash'
const { _ } = lodash
// const { moments } = moment
let transactions = [
  { timestamp: 1519864292535, category: '吃饭', price: 6.00 },
  { timestamp: 1519874872261, category: '吃饭', price: 12.00 },
  { timestamp: 1519899849526, category: '交通', price: 52.50 },
  { timestamp: 1519953249020, category: '话费', price: 4.50 },
  { timestamp: 1519963102270, category: '餐饮', price: 13.50 },
  { timestamp: 1519999849526, category: '餐饮', price: 104.25 }
]
transactions = transactions.map(function(data) {
  data.timestamp = new Date(data.timestamp)
  data.moment = moment(data.timestamp)
  return data
})

// console.log('transactions', transactions)

// 按天分组
const transactionsGroupsByDate = _.groupBy(transactions, function(item) {
  // console.log(transaction)

  return item.moment.format('YYYY-MM-DD')
})

const groupByCategory = _.groupBy(transactions, item => {
  return item.category
})

// console.log(transactionsGroupsByDate)
// console.log(groupByCategory)

const bills = [
  { timestamp: 1519864292535, category: '吃饭', price: 6.00 },
  { timestamp: 1519874872261, category: '吃饭', price: 12.00 },
  { timestamp: 1519899849526, category: '交通', price: 52.50 },
  { timestamp: 1519953249020, category: '话费', price: 4.50 },
  { timestamp: 1519963102270, category: '餐饮', price: 13.50 },
  { timestamp: 1519999849526, category: '餐饮', price: 104.25 }
]

// 分组整合
function createTimeSeries(timeSeriesArray) {
  const timeSeriesObj = {
    array: timeSeriesArray.map(item => {
      item.moment = moment(item.timestamp)
      // console.log(item)

      return item
    }),

    groupByFormat(formatPattern) {
      return _.groupBy(timeSeriesObj.array, item => {
        return item.moment.format(formatPattern)
      })
    },

    dates() {
      return timeSeriesObj.groupByDate().dates()
    },
    weeks() {
      return timeSeriesObj.groupByWeek().weeks()
    },
    months() {
      return timeSeriesObj.groupByMonth().months()
    },
    years() {
      return timeSeriesObj.groupByYear().years()
    },
    groupByDate() {
      const groupedResult = {
        map: timeSeriesObj.groupByFormat('YYYY-MM-DD'),
        dates() {
          return _.keys(groupedResult.map)
        },
        sum(date) {
          return _.sumBy(groupedResult.map[date], 'price')
        }
      }
      return groupedResult
    },
    // groupByDate() {
    //   return timeSeriesObj.groupByFormat('YYYY-MM-DD')
    // },

    groupByWeek() {
      // return timeSeriesObj.groupByFormat('YYYY-WW')
      const groupedByDate = timeSeriesObj.groupByDate()
      const groupedResult = {
        map: _.groupBy(groupedByDate.dates(), date => {
          return moment(date).format('YYYY-WW')
        }),
        weeks() {
          return _.keys(groupedResult.map)
        },
        sum(week) {
          const dates = groupedResult.map(week)

          return _.sumBy(dates, date => {
            return groupedByDate.sum(date)
          })
        },
        average(week) {
          const dates = groupedResult.map(week)
          const sum = groupedResult.sum(week)
          return (sum / dates.length)
        }
      }
      return groupedResult
    },

    groupByMonth() {
      // return timeSeriesObj.groupByFormat('YYYY-MM')
      const groupedByDate = timeSeriesObj.groupByDate()
      const groupedResult = {
        map: _.groupBy(groupedByDate.dates(), date => {
          return moment(date).format('YYYY-MM')
        }),
        months() {
          return _.keys(groupedResult.map)
        },
        sum(month) {
          const dates = groupedResult.map(month)

          return _.sumBy(dates, date => {
            return groupedByDate.sum(date)
          })
        },
        average(month) {
          const dates = groupedResult.map(month)
          const sum = groupedResult.sum(month)
          return (sum / dates.length)
        }
      }
      return groupedResult
    },

    groupByYear() {
      // return timeSeriesObj.groupByFormat('YYYY')

      // return timeSeriesObj.groupByFormat('YYYY-MM')
      const groupedByDate = timeSeriesObj.groupByDate()
      const groupedResult = {
        map: _.groupBy(groupedByDate.dates(), date => {
          return moment(date).format('YYYY')
        }),
        years() {
          return _.keys(groupedResult.map)
        },
        sum(year) {
          const dates = groupedResult.map(year)

          return _.sumBy(dates, date => {
            return groupedByDate.sum(date)
          })
        },
        average(year) {
          const dates = groupedResult.map(year)
          const sum = groupedResult.sum(year)
          return (sum / dates.length)
        }
      }
      return groupedResult
    }

  }
  return timeSeriesObj
}

const timeSeries = createTimeSeries(bills)
// console.log(timeSeries)
// const groupedByDateSeries = timeSeries.groupByDate()
// console.log(groupedByDateSeries.dates())
// const firstDate = groupedByDateSeries.dates()[0]
// console.log(firstDate)

// const firstDateTotalBillSum = groupedByDateSeries.sum(firstDate)
// console.log(firstDateTotalBillSum)

// console.log(timeSeries.groupByWeek())

console.log(timeSeries.months())

