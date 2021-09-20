export default function createStatementData(invoice, plays) {
  const statementData = {}
  statementData.customer = invoice.customer
  // statementData.performances = invoice.performances;
  // 没有看明白为啥要对数组的值重新map后重新赋值？为了避免函数参数的原始值被改变
  statementData.performances = invoice.performances.map(enrichPerformance)
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)

  return statementData

  function totalAmount(data) {
    // let result = 0;
    // for (let perf of data.performances) {
    // 	result += perf.amount;
    // }
    // return result;
    return data.performances.reduce((total, cur) => total + cur.amount, 0)
  }

  function totalVolumeCredits(data) {
    // let result = 0;
    // for (let perf of data.performances) {
    // 	result += volumeCreditsFor(perf);
    // }
    // return result;
    // 管道取代循环
    return data.performances.reduce((total, cur) => total + cur.volumeCredits, 0)
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }

  // 观众量积分的计算
  function volumeCreditsFor(aPerformance) {
    let result = 0
    result += Math.max(aPerformance.audience - 30, 0)
    if (aPerformance.play.type === 'comedy') result += Math.floor(aPerformance.audience / 5)
    return result
  }
  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))

    console.log('typeof PerformanceCalculator', typeof PerformanceCalculator)
    console.log('PerformanceCalculator===PerformanceCaculator.prototype.constructor: ', PerformanceCalculator === PerformanceCalculator.prototype.constructor)

    const result = Object.assign({}, aPerformance)
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    console.log(result == aPerformance)
    return result

    function amountFor(aPerformance) {
      // let result = 0;
      // switch (aPerformance.play.type) {
      // 	case "tragedy":
      // 		result = 40000;
      // 		if (aPerformance.audience > 30) {
      // 			result += 1000 * (aPerformance.audience - 30);
      // 		}
      // 		break;
      // 	case "comedy":
      // 		result = 30000;
      // 		if (aPerformance.audience > 20) {
      // 			result += 10000 + 500 * (aPerformance.audience - 20);
      // 		}
      // 		result += 300 * aPerformance.audience;
      // 		break;
      // 	default:
      // 		throw new Error(`unknown type: ${aPerformance.play.type}`);
      // }
      // return result;
      return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount
    }
  }
}

/**
			 * 创建演出计算机类，通过类来直接调用计算价格和观众量积分的函数
			 */
class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get amount() {
    // let result = 0;
    // switch (this.play.type) {
    // 	case "tragedy":
    // 		// result = 40000;
    // 		// if (this.performance.audience > 30) {
    // 		// 	result += 1000 * (this.performance.audience - 30);
    // 		// }
    // 		// break;
    // 		throw 'bad thing';
    // 	case "comedy":
    // 		result = 30000;
    // 		if (this.performance.audience > 20) {
    // 			result += 10000 + 500 * (this.performance.audience - 20);
    // 		}
    // 		result += 300 * this.performance.audience;
    // 		break;
    // 	default:
    // 		throw new Error(`unknown type: ${this.play.type}`);
    // }
    // return result;
    throw new Error('subClass responsibility')
  }

  get volumeCredits() {
    // let result = 0;
    // result += Math.max(this.performance.audience - 30, 0);
    // if ("comedy" === this.play.type) result += Math.floor(this.performance.audience / 5);
    // return result;
    return Math.max(this.performance.audience - 30, 0)
  }
}

/** 演出计算器表现出多态性
			 * @param {Object} aPerformance
			 * @param {Object} aPlay
			 */
function createPerformanceCalculator(aPerformance, aPlay) {
  // return new PerformanceCalculator(aPerformance, aPlay)
  switch (aPlay.type) {
    case 'tragedy': return new TragedyCalculator(aPerformance, aPlay)
    case 'comedy': return new ComedyCalculator(aPerformance, aPlay)
    default:
      throw new Error(`unknow type: ${aPlay.type}`)
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30)
    }
    return result
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20)
    }
    result += 300 * this.performance.audience
    return result
  }
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5)
  }
}
