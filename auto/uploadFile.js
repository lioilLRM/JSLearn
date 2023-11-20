const axios = require('axios')
const fs = require('fs')

const appkey = 'YOUR_APP_KEY'
const appsecret = 'YOUR_APP_SECRET'

// 获取Access Token
async function getAccessToken() {
  const response = await axios.get(`https://oapi.dingtalk.com/gettoken?appkey=${appkey}&appsecret=${appsecret}`)
  const access_token = response.data.access_token
  return access_token
}

// 上传文件
async function uploadFile(access_token, file) {
  const response = await axios.post(`https://oapi.dingtalk.com/media/upload?access_token=${access_token}&type=file`, {
    type: 'file',
    media: file
  }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  const media_id = response.data.media_id
  return media_id
}

// 发送文件
async function sendFile(access_token, sender, cid, media_id) {
  const response = await axios.post(`https://oapi.dingtalk.com/message/send_to_conversation?access_token=${access_token}`, {
    sender: sender,
    cid: cid,
    msgtype: 'file',
    file: {
      media_id: media_id
    }
  }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  return response.data
}

// 使用示例
async function main() {
  const access_token = await getAccessToken()
  const file = fs.readFileSync('PATH_TO_FILE')
  const media_id = await uploadFile(access_token, file)
  const sender = 'SENDER_USERID_OR_MOBILE'
  const cid = 'CONVERSATION_ID'
  const response = await sendFile(access_token, sender, cid, media_id)
  console.log(response)
}

main()
