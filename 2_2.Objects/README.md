# JavaScript Objects
## In JavaScript, an object is a standalone entity, with properties and types, much like real-life objects. It’s a collection of key-value pairs, where each key (also called a property) is a string (or symbol) and the value can be any valid JavaScript data type (string, number, array, function, etc.).

## Creating Objects
There are two common ways to create objects:

### 1. Using Object Literals
```
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};
```
 - The keys name, age, and greet are properties of the person object.
 - The greet property is a function, also known as a method of the object.
   
### 2. Using the new Object() Syntax
```
let person = new Object();
person.name = "Alice";
person.age = 25;
person.greet = function() {
  console.log("Hello!");
};
```
This method is less common since the object literal syntax is more concise, but it's still valid.

## Accessing Object Properties
You can access the properties of an object using dot notation or bracket notation.

### 1. Dot Notation
```
console.log(person.name);  // Output: Alice
console.log(person.age);   // Output: 25
```

### 2. Bracket Notation
This is useful when the property name is dynamic or contains spaces.
```
console.log(person["name"]);  // Output: Alice
console.log(person["age"]);   // Output: 25
```
You can also use variables inside the brackets:
```
let prop = "name";
console.log(person[prop]);  // Output: Alice
```

## Adding/Modifying Properties
You can add or modify properties by simply assigning values to the object.

### Adding or Modifying a Property:
```
person.age = 30;             // Modifies the existing 'age' property
person.address = "123 Main St";  // Adds a new property 'address'
```

### Deleting Properties
You can remove a property from an object using the delete operator.
```
delete person.address; // Removes the 'address' property
console.log(person);   // { name: "Alice", age: 30, greet: [Function: greet] }
```

## Object Methods
Objects can contain functions, which are called methods.

### Example with Method:
```
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet();  // Output: Hello, Alice
```
Here, the greet() method uses the this keyword to access the object's properties.

## this Keyword in Objects
The this keyword refers to the current object in a method.
```
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);  // `this` refers to the current object
  }
};

person.greet();  // Output: Hello, Alice
```
Note that if the method is called outside the object, this might not refer to the object.

## Object Constructor
You can also create objects using a constructor function. A constructor function is a regular function that is used to initialize new objects.

### Example of Constructor Function:
```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
}

let person1 = new Person("Alice", 25);
person1.greet();  // Output: Hello, Alice
```
The Person constructor function is used to create person1 and other objects with similar structure.

## Object Methods: Common Built-in Methods
Object.keys(obj): Returns an array of the object's property names.
```
let person = { name: "Alice", age: 25 };
console.log(Object.keys(person));  // Output: ["name", "age"]
```

Object.values(obj): Returns an array of the object's values.
```
console.log(Object.values(person));  // Output: ["Alice", 25]
```

Object.entries(obj): Returns an array of key-value pairs.
```
console.log(Object.entries(person));  
// Output: [["name", "Alice"], ["age", 25]]
```

Object.freeze(obj): Prevents any changes to the object's properties (i.e., it becomes immutable).
```
Object.freeze(person);
person.age = 30; // This will not work since the object is frozen
console.log(person.age);  // Output: 25
```

Object.assign(target, source): Copies the values from one or more source objects to a target object.
```
let target = { name: "Alice" };
let source = { age: 25 };
Object.assign(target, source);
console.log(target);  // Output: { name: "Alice", age: 25 }
```

Nested Objects
Objects can contain other objects as properties, creating a hierarchy of data.
```
let person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zip: "12345"
  }
};

console.log(person.address.city);  // Output: Wonderland
```
Here, the address property is an object itself, and we access its city property.

## Cloning Objects
To clone an object (i.e., create a copy of it), you can use Object.assign() or the spread operator.

### Using Object.assign():
```
let person1 = { name: "Alice", age: 25 };
let person2 = Object.assign({}, person1);
console.log(person2);  // Output: { name: "Alice", age: 25 }
```

### Using Spread Operator:
```
let person1 = { name: "Alice", age: 25 };
let person2 = { ...person1 };
console.log(person2);  // Output: { name: "Alice", age: 25 }
```

## Key Takeaways
 - Objects are fundamental in JavaScript and are used to represent collections of data or more complex entities.
 - Properties of objects can be added, modified, and deleted dynamically.
Methods are functions stored as properties of an object.
The this keyword refers to the object the method is called on.
JavaScript provides several built-in methods to interact with objects, such as Object.keys(), Object.values(), and Object.assign().
Objects are an essential part of JavaScript programming, and they provide flexibility for organizing and managing data.
