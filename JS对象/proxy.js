// let target = {x: 10, y: 20}

// let handler = {
//   get: (obj, prop) => 43
// }
// target = new Proxy(target, handler)
// console.log(`target.x, target.y：`,target.x, target.y);

const target = {
  message1: "hello",
  message2: "everyone",
  msg3: 'Vue'
};
const handler2 = {
  get(target, prop, receiver) {
    console.log(`prop：`,target ,prop);
    if(prop === 'message1') {
      return 'Hello'
    }
    if(prop === 'message2') {
      return"World"
    }
    return target[prop]
  }
};

const proxy2 = new Proxy(target, handler2);
console.log(`proxy2.message1, proxy2.message2：`,proxy2.message1, proxy2.message2, proxy2.msg3);
