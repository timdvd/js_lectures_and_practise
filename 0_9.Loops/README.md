# JavaScript Loops
## Loops in JavaScript allow you to execute a block of code repeatedly, either for a specific number of iterations or while a condition is met. Here's an overview of the types of loops available in JavaScript:

### 1. for Loop
The for loop repeats a block of code a specific number of times.

Syntax:
```
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```
### Example:
```
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output: Iteration: 0, Iteration: 1, ..., Iteration: 4
```

### 2. while Loop
The while loop executes a block of code as long as a specified condition is true.

Syntax:
```
while (condition) {
  // Code to execute
}
```
### Example:
```
let i = 0;
while (i < 5) {
  console.log("Iteration:", i);
  i++;
}
// Output: Iteration: 0, Iteration: 1, ..., Iteration: 4
```
### 3. do...while Loop
The do...while loop executes the block of code at least once, then repeats it as long as the condition is true.

Syntax:
```
do {
  // Code to execute
} while (condition);
```
### Example:
```
let i = 0;
do {
  console.log("Iteration:", i);
  i++;
} while (i < 5);
// Output: Iteration: 0, Iteration: 1, ..., Iteration: 4
```
### 4. for...of Loop
The for...of loop iterates over iterable objects such as arrays, strings, maps, and sets.

Syntax:
```
for (const element of iterable) {
  // Code to execute
}
```
### Example (with arrays):
```
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Banana, Cherry
```
### Example (with strings):
```
let word = "JavaScript";
for (let char of word) {
  console.log(char);
}
// Output: J, a, v, a, S, c, r, i, p, t
```

### 5. for...in Loop
The for...in loop iterates over the keys (properties) of an object.

Syntax:
```
for (const key in object) {
  // Code to execute
}
```
### Example:
```
let user = { name: "Alice", age: 25, city: "New York" };
for (let key in user) {
  console.log(key, ":", user[key]);
}
// Output:
// name : Alice
// age : 25
// city : New York
```

### 6. Loop Control Statements
### break Statement
Exits the loop immediately, even if the condition is still true.
```
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
### continue Statement
Skips the current iteration and moves to the next one.
```
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

### 7. Nested Loops
Loops can be nested to work with multidimensional arrays or perform more complex iterations.

### Example:
```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Output:
// i = 1, j = 1
// i = 1, j = 2
// ...
// i = 3, j = 3
```

### 8. Looping Through Arrays
Using for Loop:
```
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```
Using forEach:
```
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
```

### 9. Infinite Loops
Loops without a proper stopping condition can run indefinitely and cause issues.

### Example:
```
while (true) {
  console.log("This is an infinite loop!");
}
// Avoid infinite loops by ensuring the condition will eventually be false.
```

## Key Takeaways:
 - Use the for loop when the number of iterations is known.
 - Use the while loop for conditions that need to be checked before each iteration.
 - Use the do...while loop to guarantee the code executes at least once.
 - Use for...of for iterating over arrays or strings.
 - Use for...in for iterating over object properties.
 - Avoid infinite loops by ensuring proper termination conditions.






