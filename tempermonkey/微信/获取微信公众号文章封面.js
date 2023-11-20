// ==UserScript==
// @name         获取微信公众号文章封面
// @name:en      Wechat media platform article cover
// @namespace    https://penghh.fun/
// @version      0.1
// @description  获取微信公众号文章封面的油猴脚本
// @description:en    A script to get wechat media platform article cover
// @author       penghh
// @match        https://mp.weixin.qq.com/*
// @icon         https://mp.weixin.qq.com/favicon.ico
// @grant        GM_registerMenuCommand
// @license      MIT license
// ==/UserScript==

(function() {
  'use strict'
  // Your code here...
  window.open(document.querySelector('meta[property="og:image"]').content)
  // GM_registerMenuCommand("获取封面", window.open(document.querySelector('meta[property="og:image"]').content), "c");
})()
