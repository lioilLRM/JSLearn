// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wx.zsxq.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zsxq.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';



  function displayShowBtn() {
      // create button element
      const button = document.createElement('button');
      button.style.position = 'fixed';
      button.style.top = '50px';
      button.style.left = '20px';
      button.textContent = '优化显示';
      button.id = 'showBtn'; // add id to button element

      // add button to document body
      document.body.appendChild(button);

      // add click event listener to button
      button.addEventListener('click', () => {
        const hiddenText = document.querySelector('.showBtn');
        if (hiddenText.style.display === 'none') {
          hiddenText.style.display = 'block';
          button.textContent = '隐藏文本';
        } else {
          hiddenText.style.display = 'none';
          button.textContent = '优化显示';
        }
      });
  }

  function init() {
      displayShowBtn();
  }

  init();
  
})();