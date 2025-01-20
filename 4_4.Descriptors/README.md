In JavaScript, property descriptors define the behavior of a property on an object. Each property in an object has an associated descriptor that describes its attributes, such as whether it is writable, enumerable, configurable, or has getter and setter methods.

Descriptors are particularly useful when working with Object.defineProperty() or Object.defineProperties() to customize the behavior of object properties.

## Types of Property Descriptors
There are two main types of descriptors:

 - Data Descriptors: Represent properties that have a value.
 - Accessor Descriptors: Represent properties defined by a getter and/or setter function.

## Attributes of Property Descriptors
Common Attributes:
 - configurable (default: false):
 - If true, the property descriptor can be changed, and the property can be deleted.

 - enumerable (default: false):
If true, the property will show up in for...in loops or Object.keys().

Data Descriptor Attributes
 - value (default: undefined):
The value associated with the property.

 - writable (default: false):
If true, the value can be changed.

Accessor Descriptor Attributes
 - get (default: undefined):
A function that is called to get the property value.

 - set (default: undefined):
A function that is called to set the property value.

Examples
## 1. Using Object.defineProperty()
This method allows defining or modifying a property with a custom descriptor.
```
const obj = {};

Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,     // Cannot modify the value
  enumerable: true,    // Will show up in loops
  configurable: false  // Cannot delete or modify the descriptor
});

console.log(obj.name); // John
obj.name = "Jane";     // Error in strict mode, ignored otherwise
console.log(obj.name); // John
```

## 2. Accessor Descriptors
### Defining a getter and/or setter for a property.
```
const person = {
  firstName: "John",
  lastName: "Doe"
};

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
  enumerable: true
});

console.log(person.fullName); // John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith
```

## 3. Retrieving Property Descriptors
### Use Object.getOwnPropertyDescriptor() to inspect a property's descriptor.
```
const obj = { a: 10 };
Object.defineProperty(obj, "b", { value: 20, writable: false });

console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// { value: 10, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(obj, "b"));
// { value: 20, writable: false, enumerable: false, configurable: false }
```

## 4. Defining Multiple Properties
Use Object.defineProperties() to define multiple properties at once.
```
const obj = {};

Object.defineProperties(obj, {
  prop1: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  },
  prop2: {
    get() {
      return "Hello";
    },
    enumerable: true
  }
});

console.log(obj.prop1); // 42
console.log(obj.prop2); // Hello
```

## Default Descriptor Values
When you define a property using = (e.g., obj.prop = value), JavaScript creates it with default descriptor values:
```
const obj = { a: 1 };

console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// { value: 1, writable: true, enumerable: true, configurable: true }
```

## Key Takeaways
 - Default behavior: By default, properties are writable, enumerable, and configurable.
 - Customization: Use descriptors to control access, visibility, and mutability of object properties.
 - Immutability: Use configurable: false and writable: false for read-only properties.

Would you like more examples or help with a specific use case?
