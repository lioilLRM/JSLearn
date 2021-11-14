// const request = require('request')
const path = require('path')

console.log(path.dirname(__filename))

const url = 'https://mmbiz.qpic.cn/mmbiz_jpg/0SzyyPO86Anc1s26WAaj5VRKnExUFH2mwrkficcBemRq2IX0aererRTlJFs4QqCySgHISjkMboKFqIHJlVbmuug/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'

// getImageFromServer(url)

function getImageFromServer(path) {
  // var path = document.getElementById('fileInput').value
  // var xhr = new XMLHttpRequest()
  // xhr.path = path
  // xhr.open('GET', path, true)
  // xhr.responseType = 'arraybuffer'
  // xhr.onload = function(e) {
  //   if (xhr.status === 200) {
  //     var info = getImageType(xhr.response)
  //     document.getElementById('imgType').innerHTML = '图片MIME类型: ' + info.mime
  //     document.getElementById('imgExt').innerHTML = '图片MIME扩展名: ' + info.ext
  //     document.getElementById('imgSize').innerHTML = '图片大小: ' + xhr.response.byteLength
  //   } else {
  //     console.log('Problem retrieving image ' + JSON.stringify(e))
  //   }
  // }
  // xhr.send()
  request(path, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      console.log(response)
    }
  })
}

function getImageType(arrayBuffer) {
  if (!arrayBuffer.byteLength) {
    return {
      mime: null,
      ext: null
    }
  }

  var ext = ''
  var mime = ''
  var dv = new DataView(arrayBuffer, 0, 5)
  var nume1 = dv.getUint8(0, true)
  var nume2 = dv.getUint8(1, true)
  var hex = nume1.toString(16) + nume2.toString(16)

  switch (hex) {
    case '8950':
      ext = 'png'
      mime = 'image/png'
      break
    case '4749':
      ext = 'gif'
      mime = 'image/gif'
      break
    case 'ffd8':
      ext = 'jpg'
      mime = 'image/jpeg'
      break
    case '424d':
      ext = 'bmp'
      mime = 'image/bmp'
      break
    case '5249':
      ext = 'webp'
      mime = 'image/webp'
      break
    default:
      ext = null
      mime = null
      break
  }

  return {
    mime: mime,
    ext: ext
  }
}
