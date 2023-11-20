// ==UserScript==
// @name         知识星球自用脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:9528/
// @icon         https://wx.zsxq.com/dweb2/assets/images/favicon_32.ico
// @grant        none
// @require     file://S:\code\JS\JSLearn\tempermonkey\planet.js
// ==/UserScript==

(function() {
  'use strict'
  console.log('知识星球测试')

  function addControlPanel() {
    const parentNode = document.createElement('div')
    parentNode.id = 'controlPanelBtn'
    parentNode.className = 'controlPanel'

    parentNode.style.cssText = `position:fixed; bottom:0px; right:0px;`

    if (window.self === window.top) {
      if (document.querySelector('body')) {
        document.body.appendChild(parentNode)
      } else {
        document.documentElement.appendChild(parentNode)
      }
    }
  }
  // Your code here...
})()
