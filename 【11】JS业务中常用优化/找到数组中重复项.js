let arr = [10, 11, 11, 12, 12, 9]
const filterUnique = arr => arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i))

console.log(filterUnique(arr)); // [ 11, 23, 23, 11 ]

// function keepRepeatArrayItem(arr) {
//   fu
// }

function filterUnique2(arr) {
  let newArr =  arr.filter(arrItem => {
  return  arr.indexOf(arrItem) !== arr.lastIndexOf(arrItem)
  })

  console.log(`newArr：`,newArr);
  return newArr;
}

console.log(`filterUnique2(arr)：`,filterUnique2(arr));
