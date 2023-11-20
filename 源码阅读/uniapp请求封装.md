## 使用入口：
```javascript
export const login = (params) => {
	return $http.post('auth/user/mobileLogin',params,{load: true})
}
```

## 初始化：
```javascript
import $http from './config/requestConfig';
```

## 创建实例：
```javascript
const $http = new request({
  baseUrl: store.getters.getBaseUrl,
  fileUrl: base.baseUrl,
  defaultUploadUrl: 'api/common/v1/upload_image',
  header: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 12000
})
```
## request 类
构造函数：constructor(options)
默认初始化一些字段:
baseUrl
header

最终的请求方法：
<pre>
request(data)↘
  请求拦截： requestStart
  
     dispatchRequest()↘
        uni.request(requestData);

  响应拦截： requestEnd

   
</pre>

