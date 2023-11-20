		// 对下面的数据进行排序，按照status 为在线的在前，离线的在后，rssi值越大的在前，越小的在后
    let devices =	[
      {
          "name": "DuPods Pro-70D5",
          "address": "48:F3:F3:60:F2:7E",
          "rssi": -58,
          "status": "离线"
      },
      {
          "name": "FR8010_MI",
          "address": "FC:02:C0:61:36:BE",
          "rssi": -69,
          "status": "离线"
      },
      {
          "name": "Mi Smart Band 6",
          "address": "E7:15:63:ED:51:4A",
          "rssi": -86,
          "status": "离线"
      },
      {
          "name": "midea",
          "address": "88:F2:BD:98:68:C4",
          "rssi": -88,
          "status": "离线"
      },
      {
          "name": "GNIOTA842E379A840",
          "address": "A8:42:E3:79:A8:42",
          "rssi": -90,
          "status": "在线"
      },
      {
          "name": "HONOR Band 6-F91",
          "address": "A0:69:74:B6:0F:91",
          "rssi": -95,
          "status": "离线"
      }
  ]
  function compareOnLineUp(a, b) {
    if (a.status === '在线' && b.status === '离线') {
      return -1
    } else if (a.status === '离线' && b.status === '在线') {
      return 1
    } else {
      return b.rssi - a.rssi
    }
  }
// 按照status 为离线的在前，在线的在后，rssi值越大的在前，越小的在后
  function compareOfflineOff(a,b) {
    if (a.status === '离线' && b.status === '在线') {
      return -1
    } else if (a.status === '在线' && b.status === '离线') {
      return 1
    } else {
      return b.rssi - a.rssi
    }
  }
  devices.sort(compareOfflineOff)
  console.log(devices)