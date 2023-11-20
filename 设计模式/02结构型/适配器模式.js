// 适配器模式

const googleMap = {
  show: function() {
    console.log(`开始渲染google地图:`)
  }
}

const baiduMap = {
  // show: function() {
  //   console.log('开始渲染百度地图')
  // }

  // 百度的地图的接口不提供show方法；而是叫display 方法
  display: function() {
    console.log('开始渲染百度地图')
  }
}

const baiduMapAdapter = {
  show: function() {
    return baiduMap.display()
  }
}

const renderMap = (map) => {
  if (map.show instanceof Function) {
    map.show()
  }
}

renderMap(googleMap)
// renderMap(baiduMap)
renderMap(baiduMapAdapter)

var getGuangdongCity = function() {
  var guangdongCity = [
    {
      name: 'shenzhen',
      id: 11
    }, {
      name: 'guangzhou',
      id: 12
    }
  ]
  return guangdongCity
}
var guangdongCity = {
  shenzhen: 11,
  guangzhou: 12,
  zhuhai: 13
}

const addressAdapter = function(oldAddressFn) {
  const address = {}
  const oldAddress = oldAddressFn()
  for (let i = 0; i < oldAddress.length; i++) {
    const oldAdd = oldAddress[i]
    address[oldAdd.name] = oldAdd.id
  }

  return function() {
    return address
  }
}

const renderCity = function(fn) {
  console.log('开始渲染广东省地图')
  console.log(JSON.stringify(fn()))
}

renderCity(addressAdapter(getGuangdongCity))
