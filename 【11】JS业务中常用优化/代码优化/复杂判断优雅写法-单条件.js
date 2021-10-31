// source：https://juejin.cn/post/6844903705058213896
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status) => {
  if (status === 1) {
    sendLog('processing')
    jumpTo('IndexPage')
  } else if (status === 2) {
    sendLog('fail')
    jumpTo('FailPage')
  } else if (status === 3) {
    sendLog('fail')
    jumpTo('FailPage')
  } else if (status === 4) {
    sendLog('success')
    jumpTo('SuccessPage')
  } else if (status === 5) {
    sendLog('cancel')
    jumpTo('CancelPage')
  } else {
    sendLog('other')
    jumpTo('Index')
  }
}
onButtonClick(1)

/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClickSwitchType = (status) => {
  switch (status) {
    case 1:
      sendLog('processing')
      jumpTo('IndexPage')
      break
    case 2:
    case 3:
      sendLog('fail')
      jumpTo('FailPage')
      break
    case 4:
      sendLog('success')
      jumpTo('SuccessPage')
      break
    case 5:
      sendLog('cancel')
      jumpTo('CancelPage')
      break
    default:
      sendLog('other')
      jumpTo('Index')
      break
  }
}
onButtonClickSwitchType(1)

const objActions = {
  '1': ['processing', 'IndexPage'],
  '2': ['fail', 'FailPage'],
  '3': ['fail', 'FailPage'],
  '4': ['success', 'SuccessPage'],
  '5': ['cancel', 'CancelPage'],
  'default': ['other', 'Index']
}
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1开团进行中 2开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClickObjType = (status) => {
  const action = objActions[status] || objActions['default']
  const logName = action[0]
  const pageName = action[1]
  sendLog(logName)
  jumpTo(pageName)
}
onButtonClickObjType('1')

function sendLog(log) {
  console.log(`log：`, log)
}

function jumpTo(page) {
  console.log('to page：', page)
}

const mapActions = new Map([
  [1, ['processing', 'IndexPage']],
  [2, ['fail', 'FailPage']],
  [3, ['fail', 'FailPage']],
  [4, ['success', 'SuccessPage']],
  [5, ['cancel', 'CancelPage']],
  ['default', ['other', 'Index']]
])
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClickMapType = (status) => {
  const action = mapActions.get(status) || mapActions.get('default')
  sendLog(action[0])
  jumpTo(action[1])
}

onButtonClickMapType(1)

