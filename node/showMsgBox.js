const notifier = require('node-notifier')
const path = require('path')

function testNotifyObject() {
  const options = {
    title: '牯牛web发布',
    message: '100环境部署完成',
    icon: path.join(__dirname, 'logo2.png'),
    sound: true,
    appID: '牯牛'
  }

  // notifier.notify('Message')

  notifier.notify(options)
}

testNotifyObject()

// const WindowsToaster = require('node-notifier').WindowsToaster
// Or
// const WindowsToaster = require('node-notifier/notifiers/toaster');

// const windowsToasterNotifier = new WindowsToaster({
//   withFallback: true
// })

// windowsToasterNotifier.notify({
//   title: 'Windows Toaster Notification',
//   message: 'This is a notification sent from the Windows Toaster Notifier',
//   icon: path.join(__dirname, 'icon.jpg'),
//   sound: 'SMS'
// },
// function(error, response) {
//   console.log(error, response)
// }
// )

// const WindowsToaster = require('node-notifier/notifiers/toaster')
// const WindowsBalloon = require('node-notifier/notifiers/balloon')

// const configOptions = {
// }
// const options = {
//   title: 'My notification',
//   message: 'Hello, there!',
//   icon: '',
//   sound: true, // Only Notification Center or Windows Toasters，
//   wait: false // Wait with callback, until
// }
// // new WindowsToaster(configOptions).notify(options)
// new WindowsBalloon(configOptions).notify(options) // 气球提醒，在这个方法下面 icon 配置无效

