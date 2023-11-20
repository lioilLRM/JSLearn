let arrayObj = [
  {array: [1]},
  {array: []},
  {array: [3]},
]

for(let i = 0; i < arrayObj.length; i++){
  console.log(arrayObj[i].array[0])
  for(let j = 0; j < arrayObj[i].array.length; j++){
    console.log(arrayObj[i].array[j])
  }
}