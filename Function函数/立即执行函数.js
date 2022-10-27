
//
// 请「用自己的语言」简述

// 立即执行函数是什么
// 立即执行函数就是

// 声明一个匿名函数
// 马上调用这个匿名函数

// 立即执行函数有什么用途
(function() {
  console.log(`我是匿名函数0：`)
})();
(
  function() {
    console.log('立即执行函数1')
  }()
)

new function() {
  console.log('立即执行函数；使用new 通过语法检查')
}()

void (function() {
  console.log('立即执行函数；使用void 关键字 通过语法检查')
}())

!(function() {
  console.log('立即执行函数；使用new 通过语法检查')
}())
