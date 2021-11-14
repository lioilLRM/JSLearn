/**
 使用表驱动法前需要思考两个问题，一个是如何从表中查询，毕竟不是所有场景都像上面那么简单的，
 如果if判断的是不同的范围，这该怎么查？
 另一个则是你需要在表里面查询什么，是数据？还是动作？亦或是索引？
 基于这两个问题，这里将查询分为以下三种：
直接访问
索引访问
阶梯访问
作者：sh22n
链接：https://juejin.cn/post/6844903764382613517
 */

function moneyRate(gender, hasMarried, age) {
  if (gender === 'female') {
    if (hasMarried) {
      if (age < 18) {
        console.log(`17`, 17)
      } else {
        //
      }
    } else if (age < 18) {
      //
    } else {
      //
    }
  } else {
    console.log(`male`)
  }
}


const ages =  {
  unAdult: 0,
  adult: 1
}
const genders=  {
  female: 0,
  male: 1
}
const marry = {
  unmarried:0,
  married:1
}
const age2key = (age: number): string => {
  if (age < 18) {
      return ages.unAdult
  }
  return ages.adult
}
type premiumRateType = {
  [ages: string]: {
      [genders: string]: {
          [marry: string]: {
              rate: number
          }
      }
  }
}
const premiumRate: premiumRateType = {
  
  [ages.unAdult]: {
      [genders.female]: {
          [marry.unmarried]: {
              rate: 0.1
          },
          [marry.married]: {
              rate: 0.2
          }
      },
      [genders.male]: {
          [marry.unmarried]: {
              rate: 0.3
          },
          [marry.married]: {
              rate: 0.4
          }
      }
  },
  [ages.adult]: {
      [genders.female]: {
          [marry.unmarried]: {
              rate: 0.5
          },
          [marry.married]: {
              rate: 0.6
          }
      },
      [genders.male]: {
          [marry.unmarried]: {
              rate: 0.7
          },
          [marry.married]: {
              rate: 0.8
          }
      }
  }
}
const getRate = (age: number, hasMarried: 0 | 1, gender: 0 | 1) => {
   const ageKey: string = age2key(age);
   return premiumRate[ageKey]
      && premiumRate[ageKey][gender]
      && premiumRate[ageKey][gender][hasMarried]
}
