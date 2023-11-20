// ==UserScript==
// @name              KeepChatGPT
// @description       让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area. (4) Conversation not found.
// @version           8.0
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @supportURL        https://github.com/xcanwin/KeepChatGPT/

// @description:zh-CN 让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area. (4) Conversation not found.
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             https://chat.openai.com/*
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             unsafeWindow
// @run-at            document-idle
// ==/UserScript==

(function() {
  'use strict'

  var qs = document.querySelector.bind(document)

  var tl = function(s) {
    var lang = `
{
  "index": {"暗色主题": "dm", "浅色主题": "lm", "显示调试": "sd", "取消审计": "cm", "关于": "ab"},
  "local": {
"ar": {"dm": "الوضع الداكن", "lm": "وضع فاتح", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ab": "حول"},
"bg": {"dm": "Тъмна тема", "lm": "Светла тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ab": "За"},
"cs": {"dm": "Tmavý režim", "lm": "Světlý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ab": "O"},
"da": {"dm": "Mørk tilstand", "lm": "Lys tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ab": "Om"},
"de": {"dm": "Dunkler Modus", "lm": "Heller Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ab": "Über"},
"el": {"dm": "Σκοτεινή θεματολογία", "lm": "Φωτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ab": "Σχετικά με"},
"en": {"dm": "Dark mode", "lm": "Light mode", "sd": "Show debugging", "cm": "Cancel audit", "ab": "About"},
"eo": {"dm": "Malhela moduso", "lm": "Hela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ab": "Pri"},
"es": {"dm": "Modo oscuro", "lm": "Modo claro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ab": "Acerca de"},
"fi": {"dm": "Tumma tila", "lm": "Vaalea tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ab": "Tietoa"},
"fr": {"dm": "Mode sombre", "lm": "Mode clair", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ab": "À propos de"},
"fr-CA": {"dm": "Mode nuit", "lm": "Mode jour", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ab": "À propos de"},
"he": {"dm": "מצב כהה", "lm": "מצב בהיר", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ab": "אודות"},
"hu": {"dm": "Sötét mód", "lm": "Világos mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ab": "Rólunk"},
"id": {"dm": "Mode gelap", "lm": "Mode terang", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ab": "Tentang"},
"it": {"dm": "Modalità scura", "lm": "Modalità chiara", "sd": "Mostra debug", "cm": "Annulla verifica", "ab": "Riguardo a"},
"ja": {"dm": "ダークモード", "lm": "ライトモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ab": "について"},
"ka": {"dm": "ბნელი რეჟიმი", "lm": "ნათელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ab": "შესახებ"},
"ko": {"dm": "다크 모드", "lm": "라이트 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ab": "관하여"},
"nb": {"dm": "Mørk modus", "lm": "Lys modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ab": "Om"},
"nl": {"dm": "Donkere modus", "lm": "Lichte modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ab": "Over"},
"pl": {"dm": "Tryb ciemny", "lm": "Tryb jasny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ab": "O"},
"pt-BR": {"dm": "Modo escuro", "lm": "Modo claro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ab": "Sobre"},
"ro": {"dm": "Mod întunecat", "lm": "Mod luminos", "sd": "Afișare depanare", "cm": "Anulare audit", "ab": "Despre"},
"ru": {"dm": "Темный режим", "lm": "Светлый режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ab": "О"},
"sk": {"dm": "Tmavý režim", "lm": "Svetlý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ab": "O"},
"sr": {"dm": "Тамни режим", "lm": "Светла тема", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ab": "О"},
"sv": {"dm": "Mörkt läge", "lm": "Ljust läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ab": "Om"},
"th": {"dm": "โหมดมืด", "lm": "โหมดสว่าง", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ab": "เกี่ยวกับ"},
"tr": {"dm": "Karanlık mod", "lm": "Aydınlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ab": "Hakkında"},
"uk": {"dm": "Темний режим", "lm": "Світлий режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ab": "Про"},
"ug": {"dm": "تېما كۆرسىتىش", "lm": "ئاچقۇچ كۆرۈنۈش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ab": "ئۇچۇرلىق"},
"vi": {"dm": "Chế độ tối", "lm": "Chế độ sáng", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ab": "Về"},
"zh-CN": {"dm": "暗色主题", "lm": "浅色主题", "sd": "显示调试", "cm": "取消审计", "ab": "关于"},
"zh-TW": {"dm": "暗黑模式", "lm": "淺色主題", "sd": "顯示調試", "cm": "取消稽核", "ab": "關於"}
  }
}
`
    var i, r, nl
    try {
      lang = JSON.parse(lang)
      i = lang.index[s]
      nl = navigator.language
      if (nl in lang.local) {
        r = lang.local[nl][i]
      } else {
        r = lang.local[nl.slice(0, 2)][i]
      }
    } catch (e) {
      r = s
    }
    return r
  }

  var sv = function(key, value = '') {
    GM_setValue(key, value)
  }

  var gv = function(key, value = '') {
    return GM_getValue(key, value)
  }

  var formatDate = function(d) {
    return (new Date(d)).toLocaleString()
  }

  var setIfr = function(u = '') {
    if (qs('#xcanwin') == null) {
      var nIfr = document.createElement('iframe')
      nIfr.id = 'xcanwin'
      nIfr.style = `height: 0px; width: 100%;`
      if (u) {
        nIfr.src = u
      }
      nIfr.onload = function() {
        var nIfrText = qs('#xcanwin').contentWindow.document.documentElement.innerText
        try {
          qs('#xcanwin').contentWindow.document.documentElement.style = `background: #FCF3CF; height: 360px; width: 1080px; overflow; auto;`
          if (nIfrText.indexOf(`"expires":"`) > -1) {
            console.log(`KeepChatGPT: IFRAME: Expire date: ${formatDate(JSON.parse(nIfrText).expires)}`)
          } else if (nIfrText.match(/Please stand by|while we are checking your browser|Please turn JavaScript on|Please enable Cookies|reload the page/)) {
            console.log(`KeepChatGPT: IFRAME: BypassCF`)
          }
        } catch (e) {
          console.log(`KeepChatGPT: IFRAME: ERROR: ${e},\nERROR RESPONSE:\n${nIfrText}`)
        }
      }
      qs('main').lastElementChild.appendChild(nIfr)
    } else {
      if (u) {
        qs('#xcanwin').src = u
      }
    }
  }

  var keepChat = function() {
    fetch(u).then((response) => {
      response.text().then((data) => {
        try {
          var contentType = response.headers.get('Content-Type')
          if (contentType.indexOf('application/json') > -1 && response.status !== 403 && data.indexOf(`"expires":"`) > -1) {
            console.log(`KeepChatGPT: FETCH: Expire date: ${formatDate(JSON.parse(data).expires)}`)
            qs('#xcanwin').contentWindow.document.documentElement.innerHTML = data
          } else {
            setIfr(u)
          }
        } catch (e) {
          console.log(`KeepChatGPT: FETCH: ERROR: ${e},\nERROR RESPONSE:\n${data}`)
          setIfr(u)
        }
      })
    })
  }

  var loadMenu = function() {
    var ndivmenu = document.createElement('div')
    ndivmenu.setAttribute('class', 'kmenu')
    ndivmenu.innerHTML = `<ul><li id=nmenuid1>${gv('k_showDebug', false) ? tl('显示调试') + '✓' : tl('显示调试') + '✗'}</li><li id=nmenuid2>${gv('k_theme', 'light') == 'light' ? tl('浅色主题') + '✓' : tl('暗色主题') + '✓'}</li><li id=nmenuid3>${gv('k_closeModer', false) == false ? tl('取消审计') + '✗' : tl('取消审计') + '✓'}</li><a href='${GM_info.script.namespace}'><li id=nmenuid4>${tl('关于')}</li></a></ul>`
    document.body.appendChild(ndivmenu)

    qs('#nmenuid1').onclick = function() {
      if (gv('k_showDebug', false) == true) {
        if (qs('#xcanwin')) qs('#xcanwin').style.height = '0px'
        qs('#nmenuid1').innerText = tl('显示调试') + '✗'
        sv('k_showDebug', false)
      } else {
        if (qs('#xcanwin')) qs('#xcanwin').style.height = '80px'
        qs('#nmenuid1').innerText = tl('显示调试') + '✓'
        sv('k_showDebug', true)
      }
    }
    qs('#nmenuid2').onclick = function() {
      if (gv('k_theme', 'light') == 'light') {
        qs('#kcg').styleOrigin = qs('#kcg').style
        qs('#kcg').style.background = '#2C3E50'
        qs('#kcg').style.animation = 'none'
        qs('#kcg').style.color = '#ffffff'
        qs('#kcg').style.marginRight = 'inherit'
        qs('#nmenuid2').innerText = tl('暗色主题') + '✓'
        sv('k_theme', 'dark')
      } else {
        qs('#kcg').style = qs('#kcg').styleOrigin
        qs('#nmenuid2').innerText = tl('浅色主题') + '✓'
        sv('k_theme', 'light')
      }
    }
    qs('#nmenuid3').onclick = function() {
      if (gv('k_closeModer', false) == true) {
        byeModer(false)
        qs('#nmenuid3').innerText = tl('取消审计') + '✗'
        sv('k_closeModer', false)
      } else {
        byeModer(true)
        qs('#nmenuid3').innerText = tl('取消审计') + '✓'
        sv('k_closeModer', true)
      }
    }
  }

  var loadKCG = function() {
    var symbol_prt
    if (qs('#kcg') !== null) {
      return
    }
    if (qs('main').kcg !== undefined) {
      if (qs(symbol1_class)) {
        qs('main').kcg.innerHTML = qs('main').kcg._symbol1_innerHTML
        symbol_prt = qs(symbol1_class).parentElement
      } else if (qs(symbol2_class)) {
        qs('main').kcg.innerHTML = qs('main').kcg._symbol2_innerHTML
        symbol_prt = qs(symbol2_class).parentElement
      }
      symbol_prt.insertBefore(qs('main').kcg, symbol_prt.childNodes[0])
      return
    }

    loadMenu()
    setIfr(u)

    var ndivkcg = document.createElement('div')
    ndivkcg.id = 'kcg'
    ndivkcg.setAttribute('class', 'flex py-3 px-3 items-center gap-3 rounded-md text-sm mb-1 flex-shrink-0 border border-white/20')

    var ndivmenu = qs('.kmenu')
    ndivkcg.onmouseover = ndivmenu.onmouseover = function() {
      ndivmenu.style.display = 'block'
      ndivmenu.style.left = `${qs('#kcg').getBoundingClientRect().right + 20}px`
      ndivmenu.style.top = `${qs('#kcg').getBoundingClientRect().top}px`
    }
    ndivkcg.onmouseleave = ndivmenu.onmouseleave = function() {
      ndivmenu.style.display = 'none'
    }
    ndivkcg.onclick = function() {
      if (ndivmenu.style.display == 'none') {
        ndivmenu.style.display = 'block'
        ndivmenu.style.left = `${qs('#kcg').getBoundingClientRect().right + 20}px`
        ndivmenu.style.top = `${qs('#kcg').getBoundingClientRect().top}px`
      } else {
        ndivmenu.style.display = 'none'
      }
    }
    var icon = GM_info.script.icon ? GM_info.script.icon : `${GM_info.script.namespace}raw/main/assets/logo.svg`
    ndivkcg._symbol1_innerHTML = `<img src='${icon}' />Keep${ndivkcg.id.slice(1, 2).toUpperCase()}hatGPT by x${ndivkcg.id.slice(1, 2)}anwin`
    ndivkcg._symbol2_innerHTML = `Keep${ndivkcg.id.slice(1, 2).toUpperCase()}hatGPT`

    if (qs(symbol1_class)) {
      ndivkcg.innerHTML = ndivkcg._symbol1_innerHTML
      symbol_prt = qs(symbol1_class).parentElement
    } else if (qs(symbol2_class)) {
      ndivkcg.innerHTML = ndivkcg._symbol2_innerHTML
      symbol_prt = qs(symbol2_class).parentElement
    }
    qs('main').kcg = ndivkcg
    symbol_prt.insertBefore(qs('main').kcg, symbol_prt.childNodes[0])

    addStyle()
    setUserOptions()
  }

  var addStyle = function() {
    GM_addStyle(`
#kcg {
  color: #555;
  background: linear-gradient(to top right, #F0B27A, #FDE184, #F0B27A);
  animation: gradient 6s ease-in-out infinite;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  user-select: none;
}
@keyframes gradient {
  0%{background-color:#F0B27A;}
  50%{background-color:#FDE184;}
  100%{background-color:#F0B27A;}
}

#kcg::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
  );
  transform: rotate(-45deg);
  animation: shine 2.8s linear infinite;
}
@keyframes shine {
  from {
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }
  to {
      transform: translateX(150%) translateY(150%) rotate(-45deg);
  }
}

.kmenu {
  background-color: #202123;
  color: #FFFFFF;
  border: 1px solid #4D4D4F;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: none;
  min-width: 200px;
  padding: 12px 0;
  position: absolute;
  z-index: 1000;
}
.kmenu::before {
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: -30px;
  right: 0px;
  pointer-events: auto;
  z-index: -1;
}
.kmenu::after {
  content: "";
  position: absolute;
  top: 15px;
  left: -20px;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent #202123 transparent transparent;
}
.kmenu li {
  display: block;
  padding: 8px 24px;
  text-align: left;
  user-select: none;
}
.kmenu li:hover {
  background-color: #273746;
  cursor: pointer;
}

.rounded-sm {
  user-select: none;
}

nav {
  position: relative;
}
`)
  }

  var setUserOptions = function() {
    if (gv('k_showDebug', false) == true) {
      if (qs('#xcanwin')) qs('#xcanwin').style.height = '80px'
    } else {
      if (qs('#xcanwin')) qs('#xcanwin').style.height = '0px'
    }

    if (gv('k_theme', 'light') == 'light') {
      qs('#kcg').styleOrigin = qs('#kcg').style
    } else {
      qs('#kcg').style.background = '#2C3E50'
      qs('#kcg').style.animation = 'none'
      qs('#kcg').style.color = '#ffffff'
      qs('#kcg').style.marginRight = 'inherit'
    }

    if (gv('k_closeModer', false) == true) {
      byeModer(true)
    } else {
      byeModer(false)
    }
  }

  var byeModer = function(action) {
    if (typeof _fetch === 'undefined') {
      var _fetch = fetch
    }
    if (action == true) {
      unsafeWindow.fetch = new Proxy(fetch, {
        apply: function(target, thisArg, argumentsList) {
          var n = {}
          n.json = function() { return {} }
          return argumentsList[0].includes('moderations') ? Promise.resolve(n) : target.apply(thisArg, argumentsList)
        }
      })
    } else {
      unsafeWindow.fetch = _fetch
    }
  }

  var byeConversationNotFound = function(action) {
    if (typeof _fetch === 'undefined') {
      var _fetch = fetch
    }
    if (action == true) {
      unsafeWindow.fetch = new Proxy(_fetch, {
        apply: function(target, thisArg, argumentsList) {
          try {
            if (argumentsList[0].includes('conversation')) {
              var post_body = JSON.parse(argumentsList[1].body)
              post_body.conversation_id = location.href.match(/\/c\/(.*)/)[1]
              argumentsList[1].body = JSON.stringify(post_body)
            }
          } catch (e) {}
          return target.apply(thisArg, argumentsList)
        }
      })
    } else {
      unsafeWindow.fetch = _fetch
    }
  }

  setInterval(function() {
    if (qs(symbol1_class) || qs(symbol2_class)) {
      loadKCG()
    }
  }, 300)

  setInterval(function() {
    if (qs(symbol1_class) || qs(symbol2_class)) {
      keepChat()
    }
  }, 1000 * 30)

  var u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`
  var symbol1_class = 'nav>a.flex'
  var symbol2_class = 'button.justify-center'
  byeConversationNotFound(true)
})()
