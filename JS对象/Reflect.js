const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}
duck.type = 'black'

// Detecting whether an object contains certain properties
console.log(Reflect.has(duck, 'color'));
console.log(Reflect.has(duck, 'name'));
console.log(Reflect.has(duck, 'greeting'));
console.log(Reflect.has(duck, 'age'));

console.log(Reflect.get(duck, 'color'));

console.log(Reflect.get(duck, 'greeting'));
console.log(Reflect.set(duck, 'color', 'blue'));

console.log(Reflect.get(duck, 'color'));

//Returning the object's own keys
console.log(Reflect.ownKeys(duck));
