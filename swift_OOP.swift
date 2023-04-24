// Define a class to represent a person
class Person {
  var name: String
  var age: Int

  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }

  func sayHello() {
    print("Hello, my name is \(name) and I am \(age) years old.")
  }
}

// Create a new person object
let person1 = Person(name: "John", age: 30)

// Call the sayHello method
person1.sayHello()
