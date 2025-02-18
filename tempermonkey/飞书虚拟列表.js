// ==UserScript==
// @name         飞书视频会议文字稿下载
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  将飞书视频会议的文字稿内容下载为 Markdown 格式
// @author       你的名字
// @match        https://oee5lr7gsk.feishu.cn/minutes/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  // 添加自定义按钮
  function addDownloadButton() {
    // 找到目标容器
    const transcriptHeader = document.querySelector('.transcript-header')
    const transcriptHeaderBtnItem = document.querySelector('.transcript-header-btn-item')

    if (transcriptHeader && transcriptHeaderBtnItem) {
      // 创建自定义按钮
      const downloadButton = document.createElement('button')
      downloadButton.type = 'button'
      downloadButton.className = 'ud__button ud__button--icon ud__button--icon-default ud__button--icon-size-sm'
      downloadButton.innerHTML = `
              <span class="universe-icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="DownloadOutlined">
                      <path d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM4 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path>
                  </svg>
              </span>
          `
      downloadButton.title = '下载文字稿'

      // 添加点击事件
      downloadButton.addEventListener('click', async() => {
        const overlay = createOverlay()
        const progressBox = createProgressBox()

        overlay.appendChild(progressBox)
        document.body.appendChild(overlay)

        const contents = await loadAllContent()
        const markdownContent = showTalker(contents) // 传入获取到的内容
        const filename = document.querySelector('.larkw-web-header-caption-head-title-edit-text').innerText
        downloadMarkdown(markdownContent, `${filename}.md`)

        // 下载完成后移除遮罩层
        document.body.removeChild(overlay)
      })

      // 将按钮插入到 .transcript-header-btn-item 之后
      transcriptHeaderBtnItem.insertAdjacentElement('afterend', downloadButton)
    }
  }
  // 创建遮罩层
  function createOverlay() {
    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    `
    return overlay
  }
  // 创建进度提示框
  function createProgressBox() {
    const progressBox = document.createElement('div')
    progressBox.style.cssText = `
      background: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    `
    progressBox.innerHTML = `
      <h3 style="margin: 0 0 10px 0;">正在加载内容</h3>
      <p id="progress-text" style="margin: 0;">已加载: 0 条</p>
      <p style="color: red; margin: 10px 0 0 0;">请勿关闭或刷新页面</p>
    `
    return progressBox
  }
  // 加载所有虚拟列表内容
  async function loadAllContent() {
    const virtualList = document.querySelector('.rc-virtual-list-holder')
    if (!virtualList) return []
    return new Promise((resolve) => {
      let lastScrollTop = 0
      let noNewContent = 0
      let totalHeight = 0
      const uniqueContents = new Set()
      const allContents = []

      const checkScroll = () => {
        const currentScrollTop = virtualList.scrollTop
        const maxScroll = virtualList.scrollHeight - virtualList.clientHeight
        const currentTotalHeight = virtualList.scrollHeight
        const currentContent = document.querySelectorAll('.paragraph-editor-wrapper')
        const extractedContent = Array.from(currentContent).map(comp => ({
          userName: comp.querySelector('.p-user-name').getAttribute('user-name-content'),
          content: comp.querySelector('.mm-paragraph-content').innerText
        }))

        // 使用Set去重并收集内容
        extractedContent.forEach(item => {
          const contentKey = `${item.userName}:${item.content}`
          if (!uniqueContents.has(contentKey)) {
            uniqueContents.add(contentKey)
            allContents.push(item)
          }
        })

        // 更新进度提示
        const progressText = document.getElementById('progress-text')
        if (progressText) {
          progressText.innerText = `已加载: ${allContents.length} 条`
        }

        // 检查总高度是否有变化
        if (currentTotalHeight > totalHeight) {
          totalHeight = currentTotalHeight
          noNewContent = 0 // 重置计数器
        } else if (currentScrollTop === lastScrollTop) {
          noNewContent++
        } else {
          noNewContent = 0
        }

        // 如果连续多次没有新内容，或者已经滚动到底部，则结束
        if (currentScrollTop >= maxScroll || noNewContent > 10) {
          // 最后再等待一段时间，确保内容完全加载
          setTimeout(() => {
            console.log('内容加载完成，总共获取到', allContents.length, '条不重复内容')
            resolve(allContents)
          }, 1000)
          return
        }

        lastScrollTop = currentScrollTop
        virtualList.scrollTop += virtualList.clientHeight / 2 // 减小每次滚动的距离
        setTimeout(checkScroll, 800) // 增加滚动间隔时间
      }

      checkScroll()
    })
  }
  // 提取文字稿内容
  function showTalker(contents = []) {
    let text = ''
    contents.forEach(({ userName, content }) => {
      text += `**${userName}**：${content}\n\n`
    })
    copyToClip(text, '文字稿已复制到剪贴板')
    return text
  }

  function copyToClip(text, message) {
    const copyByTextArea = (text) => {
      var textarea = document.createElement('textarea')
      document.body.appendChild(textarea)
      textarea.style.position = 'fixed'
      textarea.style.clip = 'rect(0 0 0 0)'
      textarea.style.top = '10px'
      textarea.value = text
      textarea.select()
      document.execCommand('copy', true)
      document.body.removeChild(textarea)
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('复制成功')
      }).catch(() => {
        copyByTextArea(text)
      })
    } else {
      copyByTextArea(text)
    }

    alert(message || '复制成功')
  }
  // 下载 Markdown 文件
  function downloadMarkdown(content, filename) {
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  // 页面加载完成后添加按钮
  window.addEventListener('load', addDownloadButton)
})()
