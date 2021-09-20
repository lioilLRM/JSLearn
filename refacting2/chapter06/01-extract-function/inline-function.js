// 重构前：
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
//重构后： 直接将函数里面的内容提取出来
function getRatingV2(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1
}



function beforeRating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}
// moreThanFiveLateDeliveries 函数声明的形式参数名
// 与调用处使用的变量名不同，所以我在内联时需要对代码做些微调。
function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

function afterRating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;

}


function reportLines(aCustomer) {
  　const lines = [];
  // 　gatherCustomerData(lines, aCustomer);
      lines.push(["name", aCustomer.name]);
  　lines.push(["location", aCustomer.location]);
  　return lines;
  }
  function gatherCustomerData(out, aCustomer) {
  // 　out.push(["name", aCustomer.name]);
  // 　out.push(["location", aCustomer.location]);
  }
