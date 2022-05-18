// 来源：https://github.com/mqyqingfeng/Blog/issues/27
// 双层循环
// 也许我们首先想到的是使用 indexOf 来循环判断一遍，但在这个方法之前，让我们先看看最原始的方法：

var array = [1, 1, '1', '1']

function unique(array) {
  // res用来存储结果
  var res = []
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break
      }
    }
    // 如果array[i]是唯一的，那么执行完循环，j等于resLen
    if (j === resLen) {
      res.push(array[i])
    }
  }
  return res
}

console.log(unique(array)) // [1, "1"]

// 使用Set 来实现数组去重
function uniqueBySet(array) {
  let res = []
  if (array.length) {
    // 返回的是set对象；
    res = new Set([...array])
    // 将类数组对象转为对象
    res = Array.from(res)
  }
  console.log(`res：`, res)
  return res
}

uniqueBySet(array)
