function Cat() {}
Cat.prototype = {
  food: 'fish',
  type: '猫咪',
  say: function() {
    console.log(`I love ${this.food}`)
  }
}

const blackCat = new Cat()
blackCat.say()

const whiteDog = { food: '骨头', type: '狗狗' }
blackCat.say.call(whiteDog)
blackCat.say.apply(whiteDog)
whiteDog.say()
