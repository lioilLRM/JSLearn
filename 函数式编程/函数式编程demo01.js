const peopleList = [
  {
    name: 'John Lee',
    age: 24,
    career: 'engineer'
  },
  {
    name: 'Bob Chen',
    age: 22,
    career: 'engineer'
  },
  {
    name: 'Lucy Liu',
    age: 28,
    career: 'PM'
  },
  {
    name: 'Jack Zhang',
    age: 26,
    career: 'PM'
  },
  {
    name: 'Yan Xiu',
    age: 30,
    career: 'engineer'
  }
]

// 命令式编程
function orderProgram() {
  const len = peopleList.length

  // 对员工列表按照年龄【排序】
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1; j++) {
      // 若相邻元素前面的数比后面的大
      if (peopleList[j].age > peopleList[j + 1].age) {
        // 交换两者
        [peopleList[j], peopleList[j + 1]] = [peopleList[j + 1], peopleList[j]]
      }
    }
  }

  let logText = ''
  for (let i = 0; i < len; i++) {
    const person = peopleList[i]
    // 【筛选】出年龄符合条件的
    if (person.age >= 24) {
      // 从数组中【提取】目标信息到 logText
      const perLogText = `${person.name}'s age is ${person.age}`
      if (i !== len - 1) {
        logText += `${perLogText},`
      } else {
        logText += perLogText
      }
    }
  }

  console.log(logText)
}

function fnProgram() {
  const ageBiggerThan24 = (person) => person.age >= 24

  const smallAgeFirst = (a, b) => {
    return a.age - b.age
  }

  // 定义信息提取逻辑
  const generateLogText = (person) => {
    const perLogText = `${person.name}'s age is ${person.age}`
    return perLogText
  }

  const logText = peopleList.filter(ageBiggerThan24)
    .sort(smallAgeFirst)
    .map(generateLogText)
    .join('\n')

  console.log(logText)
}

fnProgram()
