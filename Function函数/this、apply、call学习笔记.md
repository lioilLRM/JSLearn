2023年1月17日
1. apply 和 call 学习了多次，还是忘记了，为啥呢？
   因为平时在工作中几乎没有用到这两个方法。
   在阅读源码或者看面试题的时候才看到相关的方法。不用就容易忘记。

  函数调用方式
    1. func(p1, p2)                          ===> func.call(undefined, p1, p2)
    2. obj.child.func(p1, p2)            ===> obj.child.func.call(obj.child, p1, p2)
    3. func.call(content, p1, p2)

    第一和第二种可以变相的等价于call 形式

# bind
语法：
fun.bind(thisArg, arg1[...])
会创建一个新函数，当新函数被调用的时候， 他的this 值是传递给 bind()的第一个参数。   
bind的应用场景：
1. 求参数里面的最大值
2. 实现继承
3. 数组追加
4. 借用方法
5. 重写函数或方法


# 通过bind 引出 闭包的学习
axios里面的就是在闭包里面使用了apply 语法


