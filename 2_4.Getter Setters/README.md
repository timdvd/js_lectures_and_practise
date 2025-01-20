# JavaScript Getters and Setters
## Getters and setters are special methods in JavaScript that allow you to control access to an object's properties. They are often used to define custom behavior for when a property is accessed or modified.

Getter allows you to access the value of a property.
Setter allows you to set or modify the value of a property.
Getters and Setters Syntax
You can define getters and setters within an object using the get and set keywords.

##Syntax for Getter:
```
get propertyName() {
  return this._property;
}
```
## Syntax for Setter:
```
set propertyName(value) {
  this._property = value;
}
```
 - get: Defines a getter method to retrieve the property value.
 - set: Defines a setter method to set the property value.
   
### Example: Using Getters and Setters
```
let person = {
  firstName: "Alice",
  lastName: "Smith",
  
  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter for full name
  set fullName(name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);  // Output: Alice Smith

person.fullName = "Bob Johnson";
console.log(person.firstName);  // Output: Bob
console.log(person.lastName);   // Output: Johnson
```
 - The getter fullName combines firstName and lastName into a single string.
 - The setter fullName splits a full name into firstName and lastName when it is assigned.
   
### Use Cases for Getters and Setters
Validating and Modifying Values: Setters can be used to enforce validation rules when setting a property value.
```
let person = {
  _age: 0,

  // Setter to validate age
  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative!");
    } else {
      this._age = value;
    }
  },

  // Getter for age
  get age() {
    return this._age;
  }
};

person.age = 25;
console.log(person.age);  // Output: 25

person.age = -5;  // Output: Age cannot be negative!
```
In this example, the setter for age ensures that only non-negative values are assigned.

### Computed Properties: Getters can be used to calculate values dynamically based on other properties.
```
let circle = {
  radius: 5,

  // Getter for area
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(circle.area);  // Output: 78.53981633974483 (calculated dynamically)
```
Here, the getter for area calculates the area of the circle based on its radius.

### Encapsulation: Getters and setters help in encapsulating data within an object, allowing you to control how the data is accessed and modified.
```
let person = {
  _name: "Alice",

  // Getter for name
  get name() {
    return this._name;
  },

  // Setter for name
  set name(value) {
    if (value.trim() === "") {
      console.log("Name cannot be empty!");
    } else {
      this._name = value;
    }
  }
};

person.name = "Bob";  // Valid name
console.log(person.name);  // Output: Bob

person.name = "";  // Output: Name cannot be empty!
```
In this case, the setter ensures that the name property cannot be set to an empty string.

## Defining Getters and Setters in Classes
You can also define getters and setters within JavaScript classes.

### Example: Getters and Setters in a Class
```
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter for dimensions (if the width or height is updated)
  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

let rect = new Rectangle(5, 10);
console.log(rect.area);  // Output: 50

rect.dimensions = { width: 7, height: 14 };
console.log(rect.area);  // Output: 98
```
In this class example:
 - The getter area calculates and returns the area of the rectangle.
 - The setter dimensions allows you to update both the width and height properties in a single call.

## Key Takeaways
 - Getters provide a way to retrieve properties dynamically or compute values based on other properties.
 - Setters allow you to control how properties are set, including adding validation logic or transforming values before assigning them.
 - Encapsulation: Getters and setters are a good practice for hiding the internal representation of data and exposing controlled access.
 - Classes: Getters and setters are commonly used in JavaScript classes to manage data access and modifications.

Getters and setters are powerful tools to create cleaner and more maintainable code, especially when you need to control how data is accessed or modified.
