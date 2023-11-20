// const axios = require('axios').default

import axios from 'axios'

const message = {
  'msgtype': 'text',
  'text': {
    'content': 'Hello, World!'
  }
}

const webhookUrl = 'https://oapi.dingtalk.com/robot/send?access_token=75082d2cd881504896414c44b1e3ab9a54e9d5c44747febd6218b8005f0cf699'

axios.post(webhookUrl, message)
  .then(response => {
    console.log('消息发送成功！', response)
  })
  .catch(error => {
    console.error('消息发送失败：', error)
  })
