# JavaScript Functions
## A function in JavaScript is a block of reusable code designed to perform a specific task. Functions can take input, process it, and return an output. Functions are the building blocks of modular and maintainable code.

## 1. Defining a Function
### Function Declaration
A named function defined with the function keyword.
```
function functionName(parameters) {
  // Code to execute
  return value; // (optional)
}
```
### Example:
```
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```
### Function Expression
A function can also be assigned to a variable.
```
const functionName = function(parameters) {
  // Code to execute
};
```
### Example:
```
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8
```
### Arrow Functions
Introduced in ES6, arrow functions provide a concise syntax.
```
const functionName = (parameters) => {
  // Code to execute
};
```
### Example:
```
const multiply = (a, b) => a * b; // Single-line return

console.log(multiply(4, 5)); // Output: 20
```

## 2. Parameters and Arguments
Functions can take parameters (placeholders) and receive arguments when called.

### Example:
```
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 3)); // Output: 7
```
Default Parameters: You can define default values for parameters.
```
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
```

## 3. Return Statement
The return statement ends the function execution and specifies a value to return.

### Example:
```
function square(number) {
  return number * number;
}

let result = square(5);
console.log(result); // Output: 25
```

## 4. Anonymous Functions
Functions without a name are called anonymous functions. They are often used as callbacks.

### Example:
```
setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1000);
```

## 5. Immediately Invoked Function Expression (IIFE)
A function that runs immediately after it is defined.

Syntax:
```
(function() {
  // Code to execute
})();
```
### Example:
```
(function() {
  console.log("IIFE executed!");
})();
```

## 6. Function Scope
Functions create their own scope. Variables declared inside a function are not accessible outside it.

### Example:
```
function example() {
  let localVar = "I'm local";
  console.log(localVar);
}

example();
// console.log(localVar); // Error: localVar is not defined
```

## 7. Callback Functions
A callback is a function passed as an argument to another function and executed later.

### Example:
```
function processUserInput(callback) {
  let name = "Alice";
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}!`);
});
```

## 8. Higher-Order Functions
Functions that take other functions as arguments or return functions.

### Example:
```
function higherOrder(func) {
  return func(5);
}

function double(x) {
  return x * 2;
}

console.log(higherOrder(double)); // Output: 10
```

## 9. Rest Parameters
Use the ... syntax to accept a variable number of arguments.

### Example:
```
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

## 10. Function Overloading (Workaround in JavaScript)
JavaScript does not support true function overloading, but you can handle it manually.

### Example:
```
function greet(name, age) {
  if (arguments.length === 1) {
    return `Hello, ${name}!`;
  }
  return `Hello, ${name}, age ${age}!`;
}

console.log(greet("Alice"));        // Output: Hello, Alice!
console.log(greet("Alice", 25));    // Output: Hello, Alice, age 25!
```

## 11. Arrow Functions vs Regular Functions
![6](https://github.com/user-attachments/assets/461ddee1-c75b-418d-8739-22056606a2dc)
### Example:
```
// Regular function
function regular() {
  console.log(this);
}

// Arrow function
const arrow = () => {
  console.log(this);
};
```

## 12. Recursive Functions
Functions that call themselves.

### Example:
```
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```
## Key Takeaways:
 - Functions are essential for reusable, modular, and organized code.
 - Use arrow functions for concise callbacks and modern code style.
 - Use IIFE for immediate execution and avoiding variable conflicts.
 - Rest parameters (...) allow flexible argument handling.
 - Higher-order and callback functions are powerful tools in JavaScript.
