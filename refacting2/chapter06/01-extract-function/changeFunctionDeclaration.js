// 改变函数声明（Change Function Declaration）
/**
 *  别名：函数改名（Rename Function）
    曾用名：函数改名（Rename Method）
    曾用名：添加参数（Add Parameter）
    曾用名：移除参数（Remove Parameter）
    别名：修改签名（Change Signature）
 */

function circum(radius) {
  return 2 * Math.PI * radius
}

function circumference(radius) {
  return 2 * Math.PI * radius
}

export {
  circum,
  circumference
}

