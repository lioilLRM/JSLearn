(function() {
  const arr = [1, 2, 3, 4, 5]
  arr.forEach(item => {
    console.log(` 第${item} 个开始打饭`)
    if (item === 3) {
      console.log(`第${item} 个拉肚子，上厕所去了`)
      return
    }
    console.log(`第${item} 个打饭完毕，开始下一个`)
  })
})()
