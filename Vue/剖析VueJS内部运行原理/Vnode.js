class VNode {
  constructor(tag, data, children, text, elm) {
    /*当前节点的标签名*/
    this.tag = tag
    /*当前节点的一些数据信息，比如 props、attrs 等数据*/
    this.data = data
    /*当前节点的子节点，是一个数组*/
    this.children = children
    /*当前节点的文本*/
    this.text = text /*当前虚拟节点对应的真实 dom 节点*/
    this.elm = elm
  }
}

function createEmptyVNode() {
  let node = new VNode()
  node.text = ''
  return node
}

function createTextVNode() {
  return new VNode(undefined, undefined, undefined, String(val))
}

/* <template>
  <span class="demo" v‐show="isShow">
    This is a span.
  </span>
</template> */

function render() {
  return new VNode(
    'span',
    {
      /* 指令集合数组 */
      direactive: [
        {
          /* v‐show 指令 */
          rawName: 'v-show',
          expression: 'isShow',
          name: 'show',
          value: true,
        },
      ],
      staticClass: 'demo',
    },
    [new VNode(undefined, undefined, undefined, 'This is a span')],
  )
}

// 转化为VNode 后
let vnode = {
  tag: 'span',
  data: {
    /* 指令集合数组 */
    directives: [
      {
        /* v‐show 指令 */ 
        rawName: 'v‐show',
        expression: 'isShow',
        name: 'show',
        value: true,
      },
    ] 
    /* 静态 class */,
    staticClass: 'demo',
  },
  text: undefined,
  children: [
    /* 子节点是一个文本 VNode 节点 */
    {
      tag: undefined,
      data: undefined,
      text: 'This is a span.',
      children: undefined,
    },
  ],
}
