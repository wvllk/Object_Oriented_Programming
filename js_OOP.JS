// Define a class to represent a person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create a new person object
  const person1 = new Person("John", 30);
  
  // Call the sayHello method
  person1.sayHello();
  