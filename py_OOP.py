# Define a class to represent a person
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def say_hello(self):
    print(f"Hello, my name is {self.name} and I am {self.age} years old.")

# Create a new person object
person1 = Person("John", 30)

# Call the say_hello method
person1.say_hello()
