# Object-Oriented Programming (OOP) 
## in JavaScript is a programming paradigm that organizes code using objects, which are instances of classes or prototypes. JavaScript supports OOP through its prototype-based inheritance model, as well as the newer class-based syntax introduced in ES6.

## Key Concepts of OOP in JavaScript

## 1. Objects
Objects are collections of properties and methods. In JavaScript, objects can be created in various ways:

### Object Literal
```
const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Hello, my name is John
```
## 2. Classes
Classes in JavaScript provide a cleaner and more intuitive way to create objects and manage inheritance. They are syntactic sugar over JavaScript's prototype-based inheritance.

### Defining a Class
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.greet(); // Hello, my name is John and I am 30 years old.
```

## 3. Inheritance
Inheritance allows one class to derive properties and methods from another class.

### Example
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
```

## 4. Encapsulation
Encapsulation hides internal details of an object by restricting access to its properties and methods. In JavaScript, this can be achieved using private fields or closures.

### Private Fields (ES2021)
```
class Person {
  #ssn; // Private field

  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  getSSN() {
    return `SSN is private`;
  }
}

const person = new Person("John", "123-45-6789");
console.log(person.name); // John
console.log(person.getSSN()); // SSN is private
// console.log(person.#ssn); // Error: Private field
```

## 5. Polymorphism
Polymorphism allows methods in different classes to have the same name but behave differently.

### Example
```
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
  console.log(shape.area());
});
// 78.53981633974483 (circle area)
// 24 (rectangle area)
```

## 6. Abstraction
Abstraction is the concept of exposing only essential features of an object while hiding unnecessary details. In JavaScript, abstraction can be implemented using methods and restricting access to private properties.

## Prototypes in JavaScript
Before ES6 classes, JavaScript used prototypes for inheritance and object creation.

### Example of Prototype-based Inheritance
```
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet(); // Hello, my name is John
```

## OOP Principles in JavaScript
 - Encapsulation: Group related data and behavior into objects.
 - Inheritance: Reuse properties and methods of one object in another.
 - Polymorphism: Implement methods with the same name but different functionality in subclasses.
 - Abstraction: Expose only relevant details to the user.

## Key Features of OOP in JavaScript
 - Dynamic Nature: Objects can have properties and methods added or removed dynamically.
 - Flexible Inheritance: Prototype-based inheritance allows for flexible object extension.
 - Modern Syntax: ES6 classes make OOP more intuitive and closer to other programming languages like Java and Python.

![Screenshot 2025-01-20 222223](https://github.com/user-attachments/assets/a201b2fe-5d80-4392-81f1-ce55d6f65451)
