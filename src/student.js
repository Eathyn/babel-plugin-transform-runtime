export default class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`hello, I am ${this.name}, ${this.age} years old`)
  }
}
