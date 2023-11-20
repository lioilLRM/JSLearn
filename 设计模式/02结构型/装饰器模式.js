import { readonly } from 'core-decorators'

class Person {
  @readonly
  name() {
    return '靓仔'
  }
}

let person = new Person()
console.log(person.name);

