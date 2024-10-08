/**
 * 格式化一个日期
 * @param {Date} date 日期对象
 * @param {String} format 格式化字符串，如：yyyy-MM-dd hh:mm:ss
 * @returns {String} 格式化后的日期字符串
 */

function formate(date, formatter, isPad = false) {
  const _pad = (value, length) => {
    if (!isPad) return value.toString()
    return (value + '').padStart(length, '0')
  }

  formatter = _formatNormalize(formatter)

  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  }

  dateInfo.yyyy = _pad(dateInfo.year, 4)
  dateInfo.yy = _pad(dateInfo.year, 2)
  dateInfo.MM = _pad(dateInfo.month, 2)
  dateInfo.dd = _pad(dateInfo.day, 2)
  dateInfo.HH = _pad(dateInfo.hour, 2)
  dateInfo.hh = _pad(dateInfo.hour % 12 === 0 ? 12 : dateInfo.hour % 12, 2)
  dateInfo.mm = _pad(dateInfo.minute, 2)
  dateInfo.ss = _pad(dateInfo.second, 2)
  dateInfo.S = _pad(dateInfo.millisecond, 3)

  return formatter(dateInfo)
}

function _formatNormalize(formatter) {
  if (typeof formatter === 'function') {
    return formatter
  }
  if (typeof formatter !== 'string') {
    throw new Error('formatter must be string or function')
  }

  if (formatter === 'date') {
    formatter = 'yyyy-MM-dd'
  } else if (formatter === 'datetime') {
    formatter = 'yyyy-MM-dd hh:mm:ss'
  }

  return (dateInfo) => {
    const { yyyy, MM, dd, HH, hh, mm, ss } = dateInfo
    return formatter.replace(/yyyy/g, yyyy)
      .replace(/MM/g, MM)
      .replace(/dd/g, dd)
      .replace(/HH/g, HH)
      .replace(/hh/g, hh)
      .replace(/mm/g, mm)
      .replace(/ss/g, ss)
  }
}

// 参数归一化 的作用不是用来消除分支的 ,
// 它不是来消除分支的 它是让整个分支呢变得更加简洁可控 可是把参数变得更加简洁可控

// 可能的调用方式
// 这样子的调用方式会导致很多的逻辑分支 和 代码冗余, 不利于维护和扩展
// 优化的方向是: 统一的API接口, 统一的格式化模板, 统一的格式化参数

console.log(formate(new Date(), 'yyyy-MM-dd hh:mm:ss'))
formate(new Date(), 'yyyy-MM-dd')
formate(new Date(), 'yyyy-MM-dd hh:mm:ss', true)
formate(new Date(), 'yyyy-MM-dd', true)

formate(new Date(), 'datetime')
formate(new Date(), 'date')
formate(new Date(), 'time')
formate(new Date(), 'datetime', true)
formate(new Date(), 'date', true)
formate(new Date(), 'time', true)

formate(new Date(), 'yyyy年MM月dd日 hh:mm:ss')
formate(new Date(), 'yyyy年MM月dd日')
formate(new Date(), 'yyyy年MM月dd日 hh:mm:ss', true)
formate(new Date(), 'yyyy年MM月dd日', true)

formate(new Date(), (dateInfo) => {
  const { year } = dateInfo
  const thisYear = new Date().getFullYear()
  if (year < thisYear) {
    return `${thisYear - year} 年前`
  } else if (year > thisYear) {
    return `${year - thisYear} 年后`
  } else {
    return '今年'
  }
})
