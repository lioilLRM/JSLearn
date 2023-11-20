let wifiList = [
	{
			"ssid": "GUNIU-WIFI",
			"type": 1,
			"rssi": -44
	},
	{
			"ssid": "OrayBox-35C6",
			"type": 1,
			"rssi": -45
	},
	{
			"ssid": "ChinaNet-pGgi",
			"type": 1,
			"rssi": -69
	},
	{
			"ssid": "LFSJ-5",
			"type": 1,
			"rssi": -70
	},
	{
			"ssid": "Goger-2.4G",
			"type": 1,
			"rssi": -81
	},
	{
			"ssid": "gggg",
			"type": 1,
			"rssi": -81
	},
	{
			"ssid": "gggg",
			"type": 1,
			"rssi": -83
	},
	{
			"ssid": "Goger-2.4G",
			"type": 1,
			"rssi": -86
	},
	{
			"ssid": "ASML",
			"type": 1,
			"rssi": -86
	},
	{
			"ssid": "midea_fa_7449",
			"type": 1,
			"rssi": -91
	}
]
// 对上面的WiFi列表进行排序，按照信号强度从强到弱的顺序排列，如果信号强度相同，则按照ssid的字典序排列。排序完成后，进行去重，去重规则是ssid相同的去重。
// 请在下面的函数中实现上述功能，wifiList是一个数组，数组中的每个元素是一个对象，对象中包含三个属性，分别是ssid、type、rssi，分别表示WiFi的名称、类型、信号强度。
// 请注意，ssid是字符串类型，type是数字类型，rssi是数字类型。
function getUniqueWifi(wifiList) {
  // 对WiFi列表进行排序
  wifiList.sort((a, b) => {
    // 先按信号强度降序排列
    if (a.rssi !== b.rssi) {
      return b.rssi - a.rssi;
    }
    // 如果信号强度相同，则按照ssid的字典序排列
    return a.ssid.localeCompare(b.ssid);
  });

  // 去重，根据ssid相同进行去重
  const uniqueWifiList = [];
  const ssidSet = new Set();

  for (const wifi of wifiList) {
    if (!ssidSet.has(wifi.ssid)) {
      ssidSet.add(wifi.ssid);
      uniqueWifiList.push(wifi);
    }
  }

  return uniqueWifiList;
}

console.log(getUniqueWifi(wifiList));