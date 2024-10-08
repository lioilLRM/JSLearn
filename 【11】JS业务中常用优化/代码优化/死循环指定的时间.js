
function delay(duration) {
  const start = Date.now()
  while (Date.now() - start < duration) {
    // do something
    console.log(Date.now())
  }
  console.log(`END`)
}

delay(1000) // 1000ms后输出当前时间
