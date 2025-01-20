# In JavaScript, a Symbol is a primitive data type introduced in ES6 (ECMAScript 2015). 
## It is often used to create unique, immutable identifiers for object properties. Symbols are not enumerable and are guaranteed to be unique, which makes them useful for avoiding property name collisions in objects.

## Creating Symbols
Symbols can be created using the Symbol() function:
```
const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // false
```
## Description for Symbols
You can add a description to a symbol for debugging purposes:
```
const symbolWithDesc = Symbol("description");
console.log(symbolWithDesc); // Symbol(description)
```
## Using Symbols as Object Keys
Symbols are commonly used as unique keys for object properties:
```
const mySymbol = Symbol("uniqueKey");

const obj = {
  [mySymbol]: "This is a unique property"
};

console.log(obj[mySymbol]); // "This is a unique property"
```

### Symbol Built-in Properties
JavaScript provides several built-in symbols, which represent internal behaviors of objects. Some examples are:

 - Symbol.iterator: Defines the default iterator for an object.
 - Symbol.asyncIterator: Defines the default asynchronous iterator for an object.
 - Symbol.toStringTag: Used to customize the default string description of an object.

### Example with Symbol.iterator:
```
const iterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step <= 3) {
          return { value: step, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const value of iterable) {
  console.log(value); // 1, 2, 3
}
```

## Why Use Symbols?
 - Uniqueness: No two symbols with the same description are the same.
 - Prevent Conflicts: Helps prevent property name collisions, especially in large codebases or libraries.
 - Hidden Properties: Symbols are not enumerated in for...in or Object.keys() loops, making them ideal for metadata or private properties.
   
Let me know if you'd like to see more advanced examples or use cases!
