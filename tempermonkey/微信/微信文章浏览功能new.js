// ==UserScript==
// @name               Wechat Article Menu
// @name:zh-CN         微信公众号文章菜单选项
// @description        Wechat Article Menu, Show Some Useful Options.
// @description:zh-CN  微信公众号文章菜单选项，展示一些有用的选项。
// @namespace          https://www.runningcheese.com
// @version            0.2
// @author             RunningCheese
// @match              https://mp.weixin.qq.com/s/*
// @match              https://mp.weixin.qq.com/s?__biz=*
// @run-at             document-start
// @icon               https://t1.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mp.weixin.qq.com
// @license            MIT
// ==/UserScript==

(function(menuItems, position, clickOutsideClose, someFlag, uniqueId) {
  var documentElement = document
  var originalClickHandler = documentElement.onclick
  var menuId = 'ws_cmbm-' + uniqueId
  var menuElement = documentElement.getElementById(menuId)
  var styleId = 'ws_cmbms-' + uniqueId
  var styleElement = documentElement.getElementById(styleId)
  var linkElement = null

  var positionStyles = {
    tl: { left: '10px', top: '10px' },
    tr: { right: '10px', top: '10px' },
    bl: { left: '10px', bottom: '10px' },
    br: { right: '10px', bottom: '10px' }
  }

  var styleSheetContent = `
    .ws_cmbmc {
      position: fixed;
      z-index: 10123456;
      width: 200px;
      display: block;
      visibility: hidden;
      border: 1px solid #b0b0b0;
      background: #fff;
      padding: 3px 0 3px 3px;
      text-align: left;
      border-radius: 3px;
      box-shadow: 2px 2px 3px #777;
    }
    .ws_cmbmc a {
      display: block;
      float: left;
      margin: 0;
      width: 191px;
      border: none;
      padding: 8px 0 8px 6px;
      background: #fff;
      color: black;
      text-decoration: none;
      font: 12px Verdana, sans-serif;
    }
    .ws_cmbmc a:hover {
      background: #a0a0a0;
      color: white;
      border: none;
      text-decoration: none;
    }
  `

  function showMenu() {
    menuElement.style.visibility = 'visible'
  }

  if (menuElement) {
    if (menuElement.style.visibility == 'visible') {
      showMenu()
    } else {
      showMenu()
    }
    return
  }

  if (!styleElement) {
    styleSheetContent = styleSheetContent.replace(/.ws_cmbmc/g, '#' + menuId)
    styleElement = documentElement.createElement('style')
    styleElement.type = 'text/css'
    styleElement.id = styleId
    styleElement.appendChild(documentElement.createTextNode(styleSheetContent))
    documentElement.getElementsByTagName('head')[0].appendChild(styleElement)
  }

  menuElement = documentElement.createElement('div')
  menuElement.setAttribute('id', menuId)
  menuElement.className = 'ws_cmbmc'

  menuItems.forEach(function(item, index) {
    linkElement = documentElement.createElement('a')
    linkElement.appendChild(documentElement.createTextNode(item.title))
    linkElement.href = '#'
    linkElement.addEventListener('click', function(event) {
      event.preventDefault()
      if (item.url.startsWith('javascript:')) {
        var scriptContent = item.url.substring(11)
        eval(scriptContent)
      }
      if (someFlag) {
        showMenu()
      }
    })
    menuElement.appendChild(linkElement)
  })

  documentElement.getElementsByTagName('body')[0].appendChild(menuElement)

  if (positionStyles.hasOwnProperty(position)) {
    for (var key in positionStyles[position]) {
      menuElement.style[key] = positionStyles[position][key]
    }
  } else if (position === 'c') {
    menuElement.style.left = Math.round((window.innerWidth - menuElement.offsetWidth) / 2) + 'px'
    menuElement.style.top = Math.round((window.innerHeight - menuElement.offsetHeight) / 2) + 'px'
  }

  if (clickOutsideClose) {
    documentElement.onclick = function() {
      showMenu()
      if (typeof originalClickHandler === 'function') {
        originalClickHandler()
      }
    }
    menuElement.onclick = function(event) {
      event.stopPropagation()
    }
  }

  showMenu()
})([
  { title: '文章封面', url: 'javascript:(function() { var url = document.querySelector("meta[property=\'twitter:image\']").content; window.open(url, \'_blank\'); })();' },
  { title: '文章摘要', url: 'javascript:(function() { var summary = document.querySelector("meta[name=\'description\']").content; prompt("文章摘要：", summary); })();' },
  { title: '净化链接', url: 'javascript:(function(){ ... })();' },
  { title: '原始链接', url: 'javascript:(function(){ prompt("原始链接：", "https://mp.weixin.qq.com/s?__biz=" + biz + "&idx=1&mid=" + mid + "&sn=" + sn); })();' },
  { title: '历史消息链接', url: 'javascript:(function(){ prompt("历史消息链接：", "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=" + biz + "#wechat_redirect"); })();' },
  { title: '*历史消息', url: 'javascript:window.open("https://freewechat.com/a/" + biz);void(0);' },
  { title: '*被删文章查看', url: 'javascript:(function(){ location.href = location.href.replace("mp.weixin.qq.com/s?__biz=", "freewechat.com/a/").replace("&idx=2&mid=", "/"); })();' }
], 'tl', true, true, 1678121690605)

/*
注意：
隐藏的两行注释，而需要魔法才能使用。

缺点：
历史消息：并不是所有的公众号才能查看历史消息。
被删文章查看：需要在 https://mp.weixin.qq.com/s?__biz=MzAwMj 这样的被删原始链接上才能使用，如果是 https://mp.weixin.qq.com/s/JRNA5I 这样的简短链接，则无法使用。
*/

