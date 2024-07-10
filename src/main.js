class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`hi, I am ${this.name}`)
  }
}

const person = new Person('Tom')
person.greet()
