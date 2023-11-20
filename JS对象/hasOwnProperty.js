const dog = {typeName: '小狗'}

// console.log(`dog.hasOwnProperty('name')：`, dog.hasOwnProperty('name'));

// dog.hasOwnProperty('name')

console.log(Object.hasOwnProperty('typeName'));
console.log(Object.prototype.hasOwnProperty.call(dog, 'typeName'));

var foo = {
  hasOwnProperty: function() {
      return false;
  },
  bar: 'Hello'
};

foo.hasOwnProperty('bar'); // 始终返回 false
console.log(Object.hasOwnProperty.call(foo, 'bar'));
