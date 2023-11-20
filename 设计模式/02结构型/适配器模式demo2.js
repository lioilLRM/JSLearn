
class HttpUtils {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.changeData(data)
      })
        .then(response => response.json())
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static changeData(obj) {
    var prop
    var str = ''
    var i = 0
    for (prop in obj) {
      if (!prop) {
        return
      }
      if (i === 0) {
        str += prop + '=' + obj[prop]
      } else {
        str += '&' + prop + '=' + obj[prop]
      }
      i++
    }
    return str
  }
}

async function fetchData() {
  // 定义目标url地址
  const URL = 'xxxxx'
  // 定义post入参
  const params = {
  }
  // 发起post请求
  const postResponse = await HttpUtils.post(URL, params) || {}

  // 发起get请求
  const getResponse = await HttpUtils.get(URL) || {}
}

function Ajax(type, url, data, success, failed) {
  // 创建ajax对象
  var xhr = null
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    // xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  //  ...(此处省略一系列的业务逻辑细节)

  var type = type.toUpperCase()

  // 识别请求类型
  if (type == 'GET') {
    if (data) {
      xhr.open('GET', url + '?' + data, true) // 如果有数据就拼接
    }
    // 发送get请求
    xhr.send()
  } else if (type == 'POST') {
    xhr.open('POST', url, true)
    // 如果需要像 html 表单那样 POST 数据，使用 setRequestHeader() 来添加 http 头。
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    // 发送post请求
    xhr.send(data)
  }

  // 处理返回数据
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(xhr.responseText)
      } else {
        if (failed) {
          failed(xhr.status)
        }
      }
    }
  }
}

// 不仅接口名不同，入参方式也不一样，这手动改要改到何年何日呢？
function ajaxGetData() {
  // 发送get请求
  Ajax('get', 'url地址', 'post入参', function(data) {
  // 成功的回调逻辑
  }, function(error) {
  // 失败的回调逻辑
  }
  )
}

async function AjaxAdapter(type, url, data, success, failed) {
  type = type.toUpperCase()

  let result

  try {
    if (type === 'GET') {
      result = await HttpUtils.get(url) || {}
    } else if (type === 'POST') {
      result = await HttpUtils.post(url, data) || {}
    }
  } catch (error) {
    if (failed) {
      failed(error.statusCode)
    }
  }
}

