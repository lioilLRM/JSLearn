// ==UserScript==
// @name         百度网盘文件库目录导出
// @namespace    https://github.com/liong911/BaidunNetDisk-script
// @version      1.1.0
// @description  适用于新版本百度网盘文件库目录导出的篡改猴脚本。js牛逼！
// @author       liong
// @license      MIT
// @match        https://pan.baidu.com/disk*
// @run-at       document-start
// @grant        unsafeWindow
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
  'use strict'
  // Your code here...

  const Mode = {
    FILE: 1,
    EXCEL: 2
  }

  const config = {
    // 请求分页每页500条
    pageSize: 500,
    // 每500条打印一次日志
    tipsCount: 500,

    exportMode: {
      mode: Mode.EXCEL,
      file: {
        SPLITTER: ', '
      },
      excel: {}
    }
  }

  var exportInfo = {
    content: [],
    statistic: {
      fileCount: 0,
      fileSize: 0,
      startTime: new Date()
    },

    exportSelectedDir: function() {
      // 弹出选择框，选择导出模式
      const mode = prompt('请选择导出模式：\n1. 文件\n2. Excel', '1')
      if (mode == null || mode.length <= 0) {
        return
      }
      config.exportMode.mode = parseInt(mode)

      exportInfo.init()
      exportInfo.exportEveryDir()
      exportInfo.save()
    },
    init: function() {
      this.content = []

      this.statistic.fileCount = 0
      this.statistic.fileSize = 0
      this.statistic.startTime = new Date()
    },
    exportEveryDir: function() {
      const selectedList = $("tr[class='im-pan-table__body-row mouse-choose-item selected']")
      for (let i = 0; i < selectedList.length; i++) {
        const selected = selectedList[i]
        const fsId = selected.dataset.id.substring(16, 31)
        this.loopQueryPage(fsId, 1)
      }
    },
    loopQueryPage: function(fsId, pageNo) {
      const gidUrl = `https://pan.baidu.com/mbox/msg/shareinfo?page=${pageNo}&num=${config.pageSize}&fs_id=${fsId}&from_uk=${authInfo.fromUk}&msg_id=${authInfo.msgId}&type=2&gid=${authInfo.gid}&limit=50&desc=1&clienttype=0&app_id=250528&web=1&dp-logid=${authInfo.dpLogid}`
      $.ajax({
        type: 'GET',
        url: gidUrl,
        data: {},
        dataType: 'json',
        async: false,
        success: (res) => {
          console.log(`url：`, gidUrl)
          if (res.errno != 0) {
            console.error('获取异常', res)
          }
          const hasMore = res.has_more
          this.processBiz(res.records)
          if (hasMore === 1) {
            this.loopQueryPage(fsId, pageNo + 1)
          }
        },
        error: function(err) {
          console.error(err)
        }
      })
    },
    processBiz: function(records) {
      if (records == null || records.length == 0) {
        return
      }

      for (let i = 0; i < records.length; i++) {
        const record = records[i]
        if (record.isdir == 0) {
          this.doBiz(record)
        } else {
          this.loopQueryPage(record.fs_id, 1)
        }
      }
    },
    doBiz: function(record) {
      const fileMb = record.size / 1024 / 1024
      const fileObj = {
        name: record.server_filename,
        path: record.path,
        size: fileMb.toFixed(2),
        fsId: record.fs_id,
        localMtime: record.local_mtime,
        serverMtime: record.server_mtime
      }
      this.content.push(fileObj)

      // 计数
      this.recordStatistic(record)
    },
    recordStatistic: function(record) {
      this.statistic.fileCount++
      this.statistic.fileSize += record.size
      if (this.statistic.fileCount % config.tipsCount === 0) {
        console.log(`累计导出资源数：${this.statistic.fileCount}`)
        const gb = this.statistic.fileSize / 1024 / 1024 / 1024
        const mb = this.statistic.fileSize / 1024 / 1024
        console.log(`累计资源大小：${gb.toFixed(2)}GB = ${mb.toFixed(2)}MB`)
        const time = new Date().getTime() - this.statistic.startTime.getTime()
        console.log(`累计耗时：${time}ms，开始时间：${this.statistic.startTime}`)
      }
    },
    save: function() {
      // 打印执行结果
      const result = this.printResult()

      if (config.exportMode.mode === Mode.FILE) {
        this.writeToFile(result)
      }

      if (config.exportMode.mode === Mode.EXCEL) {
        this.writeToExcel(result)
      }
    },
    printResult: function() {
      const gb = this.statistic.fileSize / 1024 / 1024 / 1024
      const mb = this.statistic.fileSize / 1024 / 1024
      const result = `总耗时：${new Date().getTime() - this.statistic.startTime.getTime()}ms\n` +
              `共导出资源数：${this.statistic.fileCount}\n` +
              `共计资源大小：${gb.toFixed(2)}GB = ${mb.toFixed(2)}MB`
      console.log(result)

      return result
    },
    writeToFile: function(result) {
      let contentStr = result + '\n\n'
      for (let i = 0; i < this.content.length; i++) {
        const fileObj = this.content[i]
        // 资源名称, 路径, 大小MB，网盘资源的fs_id
        contentStr += fileObj.name + config.exportMode.file.SPLITTER + fileObj.path + config.exportMode.file.SPLITTER + fileObj.size + config.exportMode.file.SPLITTER + fileObj.fsId + '\n'
      }

      const blob = new Blob([contentStr], { type: 'text/plaincharset=utf-8' })
      saveAs(blob, 'exportDirList.txt')
    },
    writeToExcel: function(result) {
      const wsContent = this.processExcelData()
      this.doExcel(wsContent)
    },
    processExcelData: function() {
      // 数据
      const ws_data = []
      let maxLevelCount = 0
      for (let i = 0; i < this.content.length; i++) {
        const fileObj = this.content[i]

        const fileArr = [fileObj.name, fileObj.size, this.timestampToDatetime(fileObj.localMtime), this.timestampToDatetime(fileObj.serverMtime), fileObj.path]
        const pathLevelArr = this.getPathLevelArr(fileObj.path)
        const concat = fileArr.concat(pathLevelArr)
        ws_data.push(concat)

        maxLevelCount = Math.max(maxLevelCount, pathLevelArr.length)
      }

      // 表头
      const wd_header = ['文件名', '大小(mb)', '修改时间', '云端时间', '完整路径']
      for (let i = 0; i < maxLevelCount; i++) {
        wd_header.push(`${i + 1}级`)
      }

      // sheet
      let wsContent = []
      wsContent.push(wd_header)
      wsContent = wsContent.concat(ws_data)

      return wsContent
    },
    timestampToDatetime: function(timestamp) {
      const date = new Date(timestamp * 1000)
      // 使用toLocaleString方法格式化日期和时间
      const datetime = date.toLocaleString('zh-CN', { hour12: false })
      return datetime
    },
    getPathLevelArr: function(path) {
      const pathLevel = []
      const pathSplit = path.split('/')
      for (let i = 1; i < pathSplit.length - 1; i++) {
        pathLevel.push(pathSplit[i])
      }

      return pathLevel
    },
    doExcel(wsContent) {
      const wb = XLSX.utils.book_new()
      const ws = XLSX.utils.aoa_to_sheet(wsContent)
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
      XLSX.writeFile(wb, 'exportDirList.xlsx')
    }
  }

  const authInfo = {
    gid: '',
    fromUk: '',
    msgId: '',
    dpLogid: '',
    isChangeFileFolder: false,

    init: function() {
      this.initAuthInfo()
      this.addExportButton()
    },
    initAuthInfo: function() {
      const _this = this
      const originOpen = XMLHttpRequest.prototype.open
      XMLHttpRequest.prototype.open = function(_, url) {
        _this.clickGroupFileLibrary(url)
        _this.clickOneFileFolder(url)
        originOpen.apply(this, arguments)
      }
    },
    addExportButton: function() {
      const $dropdownbutton = $('<button type="button" class="u-button u-button--default u-button--mini"><span>导出</span></button>')
      $dropdownbutton.click(exportInfo.exportSelectedDir)
      var task = setInterval(() => {
        var buttons = $("div[class='im-file-nav__operate']")
        if (buttons.text().indexOf('导出') < 0) {
          buttons.append($dropdownbutton)
        }
      }, 2000)
    },
    clickGroupFileLibrary: function(url) {
      if (url.indexOf('/mbox/group/listshare') >= 0) {
        const gidNew = this.getUrlParamValueByName(url, 'gid')
        if (authInfo.gid != gidNew) {
          authInfo.isChangeFileFolder = true
          authInfo.gid = gidNew
          console.log('准备进度[1/4]，拿到[gid]啦，玲宝O(∩_∩)O哈哈~：' + authInfo.gid)
        }
      }
    },
    clickOneFileFolder: function(url) {
      if (url.indexOf('/mbox/msg/shareinfo') >= 0 && authInfo.fromUk.length <= 0) {
        authInfo.fromUk = this.getUrlParamValueByName(url, 'from_uk')
        console.log('准备进度[2/4]，拿到[from_uk]啦，玲宝O(∩_∩)O哈哈~：' + authInfo.fromUk)
      }

      if (url.indexOf('/mbox/msg/shareinfo') >= 0 && authInfo.isChangeFileFolder) {
        authInfo.msgId = this.getUrlParamValueByName(url, 'msg_id')
        console.log('准备进度[3/4]，拿到[msg_id]啦，玲宝O(∩_∩)O哈哈~：' + authInfo.msgId)
        authInfo.dpLogid = this.getUrlParamValueByName(url, 'dp-logid')
        console.log('准备进度[4/4]，拿到[dp_logid]啦，玲宝O(∩_∩)O哈哈~：' + authInfo.dpLogid)
        console.log('准备完成，可以开始导出啦，玲宝O(∩_∩)O哈哈~')
        authInfo.isChangeFileFolder = false
      }
    },
    getUrlParamValueByName: function(url, name) {
      // \b 边界
      // ?<= 向后匹配
      // 字符串转成正则表达式，其中的'\b'类型的特殊字符要多加一个'\'
      const reg = new RegExp(`(?<=\\b${name}=)[^&]*`)
      const target = url.match(reg)

      if (target) {
        return target[0]
      }

      return
    }
  }
  authInfo.init()
})()
