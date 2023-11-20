// 使用promise.all 加载分页数据

const getAllData = (page) => {
  return fetch(`https://www.zhipin.com/wapi/zpgeek/search/joblist.json?scene=1&query=&city=101280100&experience=&degree=&industry=&scale=&stage=&position=100901&salary=&multiBusinessDistrict=&page=${page}&pageSize=30`)
}
Promise.all([1, 2, 3].map((page) => {
  getAllData(page).then(res => {
    console.log(`res:`, res)
  })
}))
