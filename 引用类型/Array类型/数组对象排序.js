 // Usage example
const A = [2,1, 3, 4];
const B = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
const sortedB = sortObjectsByArray( A , B, 'id');
console.log(sortedB);
 

function sortObjectsByArray(sortArray, objectsArray , key = 'field') {
  if (!sortArray && !objectsArray) return []
  if (typeof sortArray === 'string') {
    sortArray = sortArray.split(',')
  }
  if(!sortArray.length) return objectsArray
  
  let sortResult = objectsArray.sort(function(a, b) {
    const indexA = sortArray.indexOf(a[key]);
    const indexB = sortArray.indexOf(b[key]);
    if (indexA === -1 && indexB === -1) {
      return 0;
    } else if (indexA === -1) {
      return 0;
    } else if (indexB === -1) {
      return 0;
    } else {
      return indexA - indexB;
    }
  });
  return sortResult
}