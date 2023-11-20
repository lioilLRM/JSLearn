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

(function(n, g, q, c, f) {
  console.log('🚀 ~ file: 重构微信文章脚本.js:17 ~ n, g, q, c, f:', n, g, q, c, f)
  const menus = [{
    title: '文章封面',
    url: 'javascript:(function() { url = document.querySelector(%22meta[property=\x27twitter:image\x27]%22).content; window.open(url,\x27_blank\x27); })();'
  }, {
    title: '文章摘要',
    url: 'javascript:(function() { summary = document.querySelector(\x27meta[name=\x22description\x22]\x27).content; prompt(\x27文章摘要：\x27,summary)})();'
  }, {
    title: '净化链接',
    url: 'javascript:(function(){const rules={\x27mp.weixin.qq.com\x27:{testReg:/^http(?:s)?:\\/\\/mp\\.weixin\\.qq\\.com\\/s\\?.*$/i,query:[\x27__biz\x27,\x27idx\x27,\x27mid\x27,\x27sn\x27,\x27src\x27,\x27timestamp\x27,\x27ver\x27,\x27signature\x27]},other:{testReg:/^(http(?:s)?:\\/\\/[^?#]*)[?#].*$/i,query:[\x27id\x27,\x27tid\x27,\x27uid\x27,\x27q\x27,\x27wd\x27,\x27query\x27,\x27keyword\x27,\x27keywords\x27]}};const%20pureUrl=function(url=window.location.href){const%20hash=url.replace(/^[^#]*(#.*)?$/,\x27$1\x27),base=url.replace(/(\\?|#).*$/,\x27\x27);let%20pureUrl=url;const%20getQueryString=function(key){let%20ret=url.match(new%20RegExp(\x27(?:\\\\?|&)(\x27+key+\x27=[^?#&]*)\x27,\x27i\x27));return%20null===ret?\x27\x27:ret[1]},methods={decodeUrl:function(url){return%20decodeURIComponent(url)}};for(let%20i%20in%20rules){let%20rule=rules[i],reg=rule.testReg,replace=rule.replace;if(reg.test(url)){let%20newQuerys=\x27\x27;void%200!==rule.query&&rule.query.length>0&&rule.query.map(query=>{const%20ret=getQueryString(query);\x27\x27!==ret&&(newQuerys+=(newQuerys.length?\x27&\x27:\x27?\x27)+ret)}),newQuerys+=void%200!==rule.hash&&rule.hash?hash:\x27\x27,pureUrl=(void%200===replace?base:url.replace(reg,replace))+newQuerys,void%200!==rule.methods&&rule.methods.length>0&&rule.methods.map(methodName=>{pureUrl=methods[methodName](pureUrl)});break}}return%20pureUrl}();let%20newnode=document.createElement(\x27input\x27);newnode.id=\x27pure-url-for-copy\x27,newnode.value=pureUrl,document.body.appendChild(newnode);let%20copyinput=document.getElementById(\x27pure-url-for-copy\x27);copyinput.select();try{document.execCommand(\x27copy\x27);window.location.href===pureUrl?window.location.reload():window.location.href=pureUrl}catch(err){null!=prompt(\x27%E5%87%80%E5%8C%96%E5%90%8E%E7%9A%84%E7%BD%91%E5%9D%80%E6%98%AF%EF%BC%9A\x27,pureUrl)&&(window.location.href=pureUrl)}document.body.removeChild(copyinput)})();'
  }, {
    title: '原始链接',
    url: 'javascript:(function(){prompt( \x27原始链接：\x27, \x27https://mp.weixin.qq.com/s?__biz=\x27+biz+\x27&idx=1&mid=\x27+mid+\x27&sn=\x27+sn)})();'
  }, {
    title: '历史消息链接',
    url: 'javascript:(function(){prompt(\x27历史消息链接：\x27,\x27https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=\x27+biz+\x27#wechat_redirect\x27)})()'
  },
  {
    title: '*历史消息',
    url: 'javascript:window.open(\x27https://freewechat.com/a/\x27 + biz);void(0);'
  }, {
    title: '*被删文章查看',
    url: 'javascript:(function(){ location.href = location.href.replace(\x27mp.weixin.qq.com/s?__biz=\x27, \x27freewechat.com/a/\x27).replace(\x27&idx=2&mid=\x27, \x27/\x27); })();'
  }
  ]
  const timeTag = 1678121690605
  const doc = document
  const docOnClick = doc.onclick
  const menusContainerId =`ws_cmbm-${timeTag}`
  const menusContainer = doc.getElementById(menusContainerId)
  const menusContainerStyle = doc.getElementById(`ws_cmbms-${timeTag}`)
  var a = {
    topLeft: { left: '10px', top: '10px' },
    topRight: { right: '10px', top: '10px' },
    bottomLeft: { left: '10px', bottom: '10px' },
    bottomRight: { right: '10px', bottom: '10px' }
  }

  var defaultMenusStyle = `
  .ws_cmbmc{
    position:fixed;
    z-index:10123456;
    width:200px;
    display:block;
    visibility:hidden;
    border:1px solid #b0b0b0;
    background:#fff;
    padding:3px 0 3px 3px;
    text-align:left;
    border-radius:3px;
    -moz-border-radius:3px;
    -webkit-border-radius:3px;
    box-shadow:2px 2px 3px #777;
    -moz-box-shadow:2px 2px 3px #777;
    -webkit-box-shadow:2px 2px 3px #777;
  }
  .ws_cmbmc a{
      display:block;
      float:left;
      margin:0;
      width:191px;
      border:none;
      padding:8px 0 8px 6px;
      background:#fff;
      color:black;
      text-decoration:none;
      font:normal normal normal 12px/100% Verdana,sans-serif;
      letter-spacing:normal;
      word-spacing:normal;
  }
  .ws_cmbmc a:hover{
      background:#a0a0a0;
      color:white;
      border:none;
      text-decoration:none;
      font:normal normal normal 12px/100% Verdana,sans-serif;
      letter-spacing:normal;
      word-spacing:normal;
  }
  `

  function showMenus() {
    menusContainer.style.visibility = 'visible'
  }
  function hideMenus() {
    menusContainer.style.visibility = 'hidden'
  }


  if(menusContainer) {
    if(menusContainer.style.visibility !== 'visible') {
      showMenus()
    }
  }

  if(!menusContainerStyle) {
    defaultMenusStyle = defaultMenusStyle.replace(/.ws_cmbmc/g, '#' + menusContainerId)
    menusContainerStyle = document.createElement('style')
    menusContainerStyle.type = 'text/css'
    menusContainerStyle.id = `ws_cmbms-${timeTag}`
    menusContainerStyle.appendChild(document.createTextNode(defaultMenusStyle))
    document.getElementsByTagName('head')[0].appendChild(menusContainerStyle)
  }

  menusContainer = document.createElement('div')
  menusContainer.setAttribute('id', menusContainerId)
  menusContainer.className = 'ws_cmbmc'

  for (i = 0; i < n.length; i++) {
    e = document.createElement('a')
    e.appendChild(document.createTextNode(n[i].title))
    e.setAttribute('href', n[i].url)
    e.onclick = function(i) {
      if (q) {
        r()
      }
    }
    b.appendChild(e)
  }


})([{
  title: '文章封面',
  url: 'javascript:(function() { url = document.querySelector(%22meta[property=\x27twitter:image\x27]%22).content;
     window.open(url,\x27_blank\x27); })();'
}, {
  title: '文章摘要',
  url: 'javascript:(function() { summary = document.querySelector(\x27meta[name=\x22description\x22]\x27).content; prompt(\x27文章摘要：\x27,summary)})();'
}, {
  title: '净化链接',
  url: 'javascript:(function(){const rules={\x27mp.weixin.qq.com\x27:{testReg:/^http(?:s)?:\\/\\/mp\\.weixin\\.qq\\.com\\/s\\?.*$/i,query:[\x27__biz\x27,\x27idx\x27,\x27mid\x27,\x27sn\x27,\x27src\x27,\x27timestamp\x27,\x27ver\x27,\x27signature\x27]},other:{testReg:/^(http(?:s)?:\\/\\/[^?#]*)[?#].*$/i,query:[\x27id\x27,\x27tid\x27,\x27uid\x27,\x27q\x27,\x27wd\x27,\x27query\x27,\x27keyword\x27,\x27keywords\x27]}};const%20pureUrl=function(url=window.location.href){const%20hash=url.replace(/^[^#]*(#.*)?$/,\x27$1\x27),base=url.replace(/(\\?|#).*$/,\x27\x27);let%20pureUrl=url;const%20getQueryString=function(key){let%20ret=url.match(new%20RegExp(\x27(?:\\\\?|&)(\x27+key+\x27=[^?#&]*)\x27,\x27i\x27));return%20null===ret?\x27\x27:ret[1]},methods={decodeUrl:function(url){return%20decodeURIComponent(url)}};for(let%20i%20in%20rules){let%20rule=rules[i],reg=rule.testReg,replace=rule.replace;if(reg.test(url)){let%20newQuerys=\x27\x27;void%200!==rule.query&&rule.query.length>0&&rule.query.map(query=>{const%20ret=getQueryString(query);\x27\x27!==ret&&(newQuerys+=(newQuerys.length?\x27&\x27:\x27?\x27)+ret)}),newQuerys+=void%200!==rule.hash&&rule.hash?hash:\x27\x27,pureUrl=(void%200===replace?base:url.replace(reg,replace))+newQuerys,void%200!==rule.methods&&rule.methods.length>0&&rule.methods.map(methodName=>{pureUrl=methods[methodName](pureUrl)});break}}return%20pureUrl}();let%20newnode=document.createElement(\x27input\x27);newnode.id=\x27pure-url-for-copy\x27,newnode.value=pureUrl,document.body.appendChild(newnode);let%20copyinput=document.getElementById(\x27pure-url-for-copy\x27);copyinput.select();try{document.execCommand(\x27copy\x27);window.location.href===pureUrl?window.location.reload():window.location.href=pureUrl}catch(err){null!=prompt(\x27%E5%87%80%E5%8C%96%E5%90%8E%E7%9A%84%E7%BD%91%E5%9D%80%E6%98%AF%EF%BC%9A\x27,pureUrl)&&(window.location.href=pureUrl)}document.body.removeChild(copyinput)})();'
}, {
  title: '原始链接',
  url: 'javascript:(function(){prompt( \x27原始链接：\x27, \x27https://mp.weixin.qq.com/s?__biz=\x27+biz+\x27&idx=1&mid=\x27+mid+\x27&sn=\x27+sn)})();'
}, {
  title: '历史消息链接',
  url: 'javascript:(function(){prompt(\x27历史消息链接：\x27,\x27https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=\x27+biz+\x27#wechat_redirect\x27)})()'
},
{
  title: '*历史消息',
  url: 'javascript:window.open(\x27https://freewechat.com/a/\x27 + biz);void(0);'
}, {
  title: '*被删文章查看',
  url: 'javascript:(function(){ location.href = location.href.replace(\x27mp.weixin.qq.com/s?__biz=\x27, \x27freewechat.com/a/\x27).replace(\x27&idx=2&mid=\x27, \x27/\x27); })();'
}
], 'tl', true, true, 1678121690605)

/*
注意：
隐藏的两行注释，而需要魔法才能使用。

缺点：
历史消息：并不是所有的公众号才能查看历史消息。
被删文章查看：需要在 https://mp.weixin.qq.com/s?__biz=MzAwMj 这样的被删原始链接上才能使用，如果是 https://mp.weixin.qq.com/s/JRNA5I 这样的简短链接，则无法使用。
*/

