/**
 抽象层次一致性（Single Level of Abstration Principle，SLAP），是和组合函数密切相关的
一个原则。

组合函数要求将一个大函数拆成多个子函数的组合，而SLAP要求函数体中的内
容必须在同一个抽象层次上。如果高层次抽象和底层细节杂糅在一起，就会显得凌乱，难
以理解。
 */

// 一个冲泡咖啡的原始需求，其制作咖啡的过程分为3步

function makeCoffee() {
  pourCoffeePowder()
  pourWater()
  stir()
}

// 加入新的需求，比如需要允许选择不同的咖啡粉，以及选择不同的风味
function makeCoffeeV2(isMilkCoffee, isSweetTooth, CoffeeType) {
  // 选择咖啡粉
  if (CoffeeType === 'CAPPUCCINO') {
    pourCappuccinoPowder()
  } else if (CoffeeType === 'BLACK') {
    pourBlackPowder()
  } else if (CoffeeType === 'MOCHA') {
    pourMochaPowder()
  } else if (CoffeeType === 'LATTE') {
    pourLattePowder()
  } else if (CoffeeType === 'ESPRESSO') {
    pourEspressoPowder()
  }
  // 加入沸水
  pourWater()
  // 选择口味
  if (isMilkCoffee) {
    pourMilk()
  }
  if (isSweetTooth) {
    addSugar()
  }
  // 搅拌
  stir()
}
function pourCappuccinoPowder() {}
function pourBlackPowder() {}
function pourMochaPowder() {}

function pourLattePowder() {}
function pourEspressoPowder() {}
function pourMilk() {}
function addSugar() {}

// （1）倒入咖啡粉，会有不同的选择。
// （2）加入沸水。
// （3）调味，根据需求加糖或加奶。
// （4）搅拌。
function makeCoffeeV3(isMilkCoffee, isSweetTooth, CoffeeType) {
  // 选择咖啡粉
  pourCoffeePowder(CoffeeType)
  // 加入沸水
  pourWater()
  // 选择口味
  flavor(isMilkCoffee, isSweetTooth)
  // 搅拌
  stir()
}

function pourCoffeePowder(CoffeeType) {
  if (CoffeeType === 'CAPPUCCINO') {
    pourCappuccinoPowder()
  } else if (CoffeeType === 'BLACK') {
    pourBlackPowder()
  } else if (CoffeeType === 'MOCHA') {
    pourMochaPowder()
  } else if (CoffeeType === 'LATTE') {
    pourLattePowder()
  } else if (CoffeeType === 'ESPRESSO') {
    pourEspressoPowder()
  }
}
function pourWater() {}
function flavor(isMilkCoffee, isSweetTooth) {
  if (isMilkCoffee) {
    pourMilk()
  }
  if (isSweetTooth) {
    addSugar()
  }
}
function stir() {}
