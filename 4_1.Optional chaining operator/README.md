The optional chaining operator (?.) in JavaScript is a syntax feature that allows you to safely access nested object properties, methods, or array elements without explicitly checking for the existence of each level in the chain. If any part of the chain is null or undefined, it stops evaluation and returns undefined instead of throwing an error.

Syntax:
```
obj?.prop    // Access object property
obj?.[expr]  // Access property using an expression
obj?.method() // Call a method
```
### Key Use Cases:
Accessing Nested Object Properties:
```
const user = { profile: { name: 'Alice' } };
console.log(user?.profile?.name);  // Output: 'Alice'
console.log(user?.contact?.phone); // Output: undefined (doesn't throw an error)
```
Calling Methods:
```
const user = {
  greet: () => 'Hello',
};
console.log(user?.greet?.()); // Output: 'Hello'
console.log(user?.sayBye?.()); // Output: undefined (doesn't throw an error)
```
### Accessing Array Elements:
```
const arr = [1, 2, 3];
console.log(arr?.[0]); // Output: 1
console.log(arr?.[10]); // Output: undefined
```
### Combining with Nullish Coalescing: To provide a fallback value when undefined is returned:
```
const user = null;
console.log(user?.profile?.name ?? 'Guest'); // Output: 'Guest'
```
### Benefits:
 - Prevents runtime errors when accessing undefined properties.
 - Simplifies code by reducing manual checks like if (obj && obj.prop).
 - Makes code more readable and concise.
### Limitations:
 - The optional chaining operator short-circuits only for null or undefined. If a property exists but has another falsy value (e.g., false, 0, ''), it won't short-circuit.
### Compatibility:
Optional chaining is supported in modern browsers (Chrome 80+, Edge 80+, Firefox 74+, Safari 13.1+) and Node.js 14+. For older environments, you can transpile your code with tools like Babel.
