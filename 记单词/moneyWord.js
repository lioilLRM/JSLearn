// ==UserScript==
// @name         欧陆记单词
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://my.eudic.net/studyList
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eudic.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  function getWordList() {
    const table = document.getElementById('word_table_star')
    var wordList = []

    var rows = table.rows
    console.log(wordList.length)
    for (var i = 1; i < rows.length; i++) { // 行
      const row = rows[i]
      // console.log(row.cells[2].innerText)
      var griditem = {}
      for (var j = 2; j < row.cells.length; j++) {
        // console.log(row.cells[j].innerText)
        if (j === 2) {
          griditem.word = row.cells[j].innerText
        } else if (j === 4) {
          griditem.explain = row.cells[j].innerText
        }

        // griditem[rows[0].cells[j].id]=row.cells[j].innerText;
      }
      wordList.push(griditem)
    }
    console.log(wordList)
  }

  function hideNavBar() {
    const navBar = document.querySelector('#navbar')
    navBar.style.display = 'none'
  }
  function hideFooter() {
    const footer = document.querySelector('#footer')
    const mainNav = document.querySelector('#mainnav-container')
    const word = document.querySelector('#container > div')
    footer.style.display = 'none'
    mainNav.style.display = 'none'
    word.style.display = 'none'
  }
  // Your code here...
})()
