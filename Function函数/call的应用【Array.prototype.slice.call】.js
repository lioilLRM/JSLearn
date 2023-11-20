function camelase() {
  var str = [].map.call(arguments, function(str) {
    return str.trim()
  }).filter(function(str) {
    return str.length
  }).join('-')

  if (!str.length) {
    return ''
  }

  if (str.length === 1 || !(/[_.\- ]+/).test(str)) {
    if (str[0] === str[0].toLowerCase() && str.slice(1) !== str.slice(1).toLowerCase()) {
      return str
    }

    return str.toLowerCase()
  }

  return str
    .replace(/^[_.\- ]+/, '')
    .toLowerCase()
    .replace(/[_.\- ]+(\w|$)/g, function(m, p1) {
      return p1.toUpperCase()
    })
}

function camelaseTest() {
  var str = [].map.call(arguments, function(str) {
    return str.trim()
  }).filter(function(str) {
    return str.length
  }).join('-')

  if (!str.length) {
    return ''
  }
  // 字符串里面不包含 _.\- 一个或多个字符集的字符串
  if (str.length === 1 || !(/[_.\- ]+/).test(str)) {
    if (str[0] === str[0].toLowerCase() && str.slice(1) !== str.slice(1).toLowerCase()) {
      return str
    }

    return str.toLowerCase()
  }
  const str1 = str.replace(/^[_.\- ]+/, '')
  const str2 = str1.toLowerCase()
  // / 表示正则表达式的开始，/g 则表示全局搜索。

  // 正则表达式中的模式是 /[_.\- ]+(\w|$)/：

  // [] 中的字符集合表示匹配其中任意一个字符。
  // _.\- 匹配三个特殊字符：下划线、点和破折号。
  // 空格匹配一个空格。
  // + 表示匹配前面的模式至少一次。
  // \w 匹配任意一个字母、数字或下划线。
  // | 表示“或者”。
  // $ 匹配字符串的结尾。
  // 整个正则表达式的含义是：匹配任意一个下划线、点、破折号或空格，后面跟着至少一个字母、数字或下划线,
  // 或者直接匹配字符串的结尾。这个表达式在字符串中可以用来找到下划线、点、破折号或空格分隔的单词或短语.
  const res = str2.replace(/[_.\- ]+(\w|$)/g, function(m, p1) {
    return p1.toUpperCase()
  })
  console.log(`res:`, res)

  // return str
  //   .replace(/^[_.\- ]+/, '')
  //   .toLowerCase()
  //   .replace(/[_.\- ]+(\w|$)/g, function(m, p1) {
  //     return p1.toUpperCase()
  //   })
}

camelaseTest('Foo-Bar')
camelaseTest('--foo.bar')
camelaseTest('__foo__bar__')
camelaseTest('__foo__', '--bar')

//    /^[_.\- ]+/
// 这是一个正则表达式，用于匹配以下划线、点、连字符或空格开头的字符串。

// 具体来说：

// ^ 表示匹配字符串的开头。
// [] 表示字符集，它可以匹配其中任意一个字符。
// _、.、- 和空格分别表示下划线、点、连字符和空格字符。
// 表示匹配前面的字符集中的一个或多个字符。
// 因此，/^[_.- ]+/ 可以匹配以下类型的字符串：

// 以下划线、点、连字符或空格字符开头的字符串。
// 上述字符开头后面可以跟随任意数量的相同或不同字符。
// 例如，它可以匹配以下字符串：

// "_example"
// ".example"
// "-example"
// " example"
// "_-..example"
// "___example"
// " example"
