const prettyLog = () => {
  const isEmpty = (value) => {
    return value == null || value === undefined || value === ''
  }
  const prettyPrint = (title, text, color) => {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      'background:transparent'
    )
  }
  // 基础信息打印
  const info = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Info' : textOrTitle
    const text = isEmpty(content) ? textOrTitle : content
    prettyPrint(title, text, '#909399')
  }

  const error = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Error' : textOrTitle
    const text = isEmpty(content) ? textOrTitle : content
    prettyPrint(title, text, '#F56C6C')
  }

  const warning = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Warning' : textOrTitle
    const text = isEmpty(content) ? textOrTitle : content
    prettyPrint(title, text, '#E6A23C')
  }
  const success = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Success ' : textOrTitle
    const text = isEmpty(content) ? textOrTitle : content
    prettyPrint(title, text, '#67C23A')
  }

  // const picture = (url, scale = 1) => {
  //   const img = new Image()
  //   img.crossOrigin = 'anonymous'
  //   img.onload = () => {
  //     const c = document.createElement('canvas')
  //     const ctx = c.getContext('2d')
  //     if (ctx) {
  //       c.width = img.width
  //       c.height = img.height
  //       ctx.fillStyle = 'red'
  //       ctx.fillRect(0, 0, c.width, c.height)
  //       ctx.drawImage(img, 0, 0)
  //       const dataUri = c.toDataURL('image/png')

  //       console.log(
  //         `%c sup?`,
  //         `font-size: 1px;
  //               padding: ${Math.floor((img.height * scale) / 2)}px ${Math.floor((img.width * scale) / 2)}px;
  //               background-image: url(${dataUri});
  //               background-repeat: no-repeat;
  //               background-size: ${img.width * scale}px ${img.height * scale}px;
  //               color: transparent;
  //               `
  //       )
  //     }
  //   }
  //   img.src = url
  // }

  return {
    info,
    error,
    warning,
    success
    // picture
  }
}

const log = prettyLog()

// 不带标题
log.info('这是基础信息!');

// 带标题
// log.info('注意看', '这是个男人叫小帅!')

// log.error('奥德彪', '出来的时候穷 生活总是让我穷 所以现在还是穷。')

// log.error('前方的路看似很危险,实际一点也不安全。')

// log.warning('奥德彪', '我并非无路可走 我还有死路一条! ')

// log.success('奥德彪', '钱没了可以再赚，良心没了便可以赚的更多。 ');

(function(menuItems, position, clickOutsideClose, someFlag, uniqueId, log) {
  console.log('🚀 ~ log:', log)
})(
  [
    'info',
    'error',
    'warning',
    'success',
    'picture'
  ],
  'tr',
  true,
  true,
  'test',
  log)
