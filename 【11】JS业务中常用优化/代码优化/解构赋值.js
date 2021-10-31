// 解构赋值的骚操作
const arr = [1, 2, 3, 4]

// 声明变量
let age = 22
let name = 'guodada'
let sex = 1

// better
let [newAge, newName, newSex] = [22, 'guodada', 1]
console.log(age, name, sex) // 22, guodada, 1



// low
const first = arr[0]
const second = arr[1]

// good
const [firstNum, secondNum] = arr

// 2. 访问数组中元素
// 有种场景，咱们可能有一个为空的项数组。并且希望访问数组的第一个、第二个或第n个项，但如果该项不存在，则使用指定默认值。
// 通常会使用数组的length属性来判断
const colors = [];
let firstColor = 'white';
if (colors.length > 0) {
 firstColor = colors[0];
}
firstColor; // => 'white'

// 使用数组解构，可以更简洁的实现同样的效果：
const colors = [];
const [firstColor = 'white'] = colors;
firstColor; // => 'white'

// const [firstColor = 'white'] = colors 
// 解构将colors数组的第一个元素赋给firstColor变量。如果数组在索引0处没有任何元素，则分配“white”默认值。
// 当然还可以更灵活，如果只想访问第二个元素，可以这么做。

const colors = [];
const [, secondColor = 'black'] = colors;
secondColor; // => 'black'
// 注意解构左侧的逗号：它表示忽略第一个元素,secondColor使用colors数组中索引为1的元素进行赋值。


// 函数传对象>>>>>>>>>>>>>>>>>>>>>>>>
const badGreet = (obj) => {
  return `${obj.greeting}, ${obj.firstName}${obj.lastName}`;
}

const goodGreet = ({  greeting,  firstName,  lastName}) => {
  return `${greeting}, ${firstName}${lastName}`;
}

// low
function lowGetFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName({ firstName, lastName }) {
  return firstName + ' ' + lastName
}

// 在参数中结构赋值，获取参数, 当参数多的使用时候十分方便
function Destructuring({ name, age }) {
  return { name, age } // 相当于 { name: name, age: age } , 可以简写
}

const params = { name: 'guodada', age: 22 }
Destructuring(params)



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


 

// 使用解构赋值能够优化下面的数据提取？
let arr = []
let stockList = [
  {  locationId: 10,  amountNumber: 100,  id: 1},   
  { locationId: 12, amountNumber: 102, id: 2}
]
for(let i = 0; i < stockList.length; i++) {
  // let info={}
  // info.locationId = stockList[i].locationId
  // info.storeNumber = stockList[i].amountNumber
  // info.materielId = stockBySelect.id
  // arr.push(info)
  arr.push({ 
    locationId: stockList[i].locationId,
    storeNumber: stockList[i].amountNumber,
  })

}
console.log(arr)
