// dayjs取 本周、上周、本月、上月、本季度、上季度时间段
function getTimeRangeByType() {
  let result = []
  const timeRangeMap = { 0: '本周', 1: '本月', 2: '近7日', 3: '近30日' }
  // this.kanbanConfigData.timeRange =3
  const timeRange = timeRangeMap[this.kanbanConfigData.timeRange]
  const today = dayjs(new Date()).format('YYYY-MM-DD') + ' 23:59:59'
  console.log(`today：`, today, timeRange)
  let startDay = ''
  let endDay = ''
  switch (timeRange) {
    case '本周':
      startDay = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD') + ' 00:00:00'
      endDay = dayjs().endOf('week').add(1, 'day').format('YYYY-MM-DD') + ' 23:59:59'
      result = [startDay, endDay]
      break
    case '本月':
      startDay = dayjs().startOf('month').format('YYYY-MM-DD') + ' 00:00:00'
      endDay = dayjs().endOf('month').format('YYYY-MM-DD') + ' 23:59:59'
      result = [startDay, endDay]
      break
    case '近7日':
      startDay = dayjs().subtract(7, 'day').format('YYYY-MM-DD') + ' 00:00:00'
      result = [startDay, today]
      break
    case '近30日':
      startDay = dayjs().subtract(30, 'day').format('YYYY-MM-DD') + ' 00:00:00'
      result = [startDay, today]
      break
    default:
      result = []
  }
  console.log(`${timeRange}:结果：`, result)

  return result
}
const dateTimes = [
  {
    id: 1,
    name: '本周',
    start_time: dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD'),
    end_time: dayjs().endOf('week').add(1, 'day').format('YYYY-MM-DD')
  },
  {
    id: 2,
    name: '上周',
    start_time: dayjs().add(-1, 'week').startOf('week').add(1, 'day').format('YYYY-MM-DD'),
    end_time: dayjs().add(-1, 'week').endOf('week').add(1, 'day').format('YYYY-MM-DD')
  },
  {
    id: 3,
    name: '本月',
    start_time: dayjs().startOf('month').format('YYYY-MM-DD'),
    end_time: dayjs().endOf('month').format('YYYY-MM-DD')
  },
  {
    id: 4,
    name: '上月',
    start_time: dayjs().add(-1, 'month').startOf('month').format('YYYY-MM-DD'),
    end_time: dayjs().add(-1, 'month').endOf('month').format('YYYY-MM-DD')
  }
]
const curMonth = dayjs().month() + 1
if (curMonth < 3) {
  dateTimes.push(
    {
      id: 5,
      name: '本季度',
      start_time: dayjs().month(0).format('YYYY-MM-DD'),
      end_time: dayjs().month(2).endOf('month').format('YYYY-MM-DD')
    },
    {
      id: 6,
      name: '上季度',
      start_time: dayjs().add(-1, 'year').month(9).format('YYYY-MM-DD'),
      end_time: dayjs().add(-1, 'year').month(11).endOf('month').format('YYYY-MM-DD')
    }
  )
} else if (curMonth < 6) {
  dateTimes.push(
    {
      id: 5,
      name: '本季度',
      start_time: dayjs().month(3).format('YYYY-MM-DD'),
      end_time: dayjs().month(5).endOf('month').format('YYYY-MM-DD')
    },
    {
      id: 6,
      name: '上季度',
      start_time: dayjs().month(0).format('YYYY-MM-DD'),
      end_time: dayjs().month(2).endOf('month').format('YYYY-MM-DD')
    }
  )
} else if (curMonth < 9) {
  dateTimes.push(
    {
      id: 5,
      name: '本季度',
      start_time: dayjs().month(6).format('YYYY-MM-DD'),
      end_time: dayjs().month(8).endOf('month').format('YYYY-MM-DD')
    },
    {
      id: 6,
      name: '上季度',
      start_time: dayjs().month(3).format('YYYY-MM-DD'),
      end_time: dayjs().month(5).endOf('month').format('YYYY-MM-DD')
    }
  )
} else if (curMonth < 12) {
  dateTimes.push(
    {
      id: 5,
      name: '本季度',
      start_time: dayjs().month(9).format('YYYY-MM-DD'),
      end_time: dayjs().month(11).endOf('month').format('YYYY-MM-DD')
    },
    {
      id: 6,
      name: '上季度',
      start_time: dayjs().month(6).format('YYYY-MM-DD'),
      end_time: dayjs().month(8).endOf('month').format('YYYY-MM-DD')
    }
  )
}
