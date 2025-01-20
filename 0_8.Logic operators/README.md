# JavaScript Logical Operators
## Logical operators in JavaScript are used to combine, compare, or invert conditions, typically returning a boolean value (true or false).

### 1. Logical AND (&&)
 - Returns true only if all operands are true.
 - If one operand is false, the evaluation stops and returns false (short-circuiting).
Syntax:
```
operand1 && operand2
```
### Examples:
```
console.log(true && true);    // true
console.log(true && false);   // false
console.log(5 > 3 && 10 > 5); // true

// Short-circuiting example:
let result = false && "Hello";
console.log(result); // false (doesn't evaluate "Hello")
```
### 2. Logical OR (||)
 - Returns true if at least one operand is true.
 - If the first operand is true, the evaluation stops and returns true (short-circuiting).
Syntax:
```
operand1 || operand2
```
### Examples:
```
console.log(true || false);   // true
console.log(false || false);  // false
console.log(5 > 3 || 10 < 5); // true

// Short-circuiting example:
let result = true || "Hello";
console.log(result); // true (doesn't evaluate "Hello")
```
### 3. Logical NOT (!)
 - Inverts the value of a boolean.
 - If the operand is true, it returns false and vice versa.
Syntax:
```
!operand
```
### Examples:
```
console.log(!true);  // false
console.log(!false); // true

let isLoggedIn = false;
console.log(!isLoggedIn); // true
```
### 4. Combining Logical Operators
You can combine &&, ||, and ! for complex conditions.
### Example:
```
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You are allowed to enter.");
} else {
  console.log("Access denied.");
}
```
### 5. Truthy and Falsy Values with Logical Operators
JavaScript treats certain values as truthy or falsy:

 - Falsy values: false, 0, "", null, undefined, NaN
 - Truthy values: Everything else (e.g., non-empty strings, non-zero numbers, objects, arrays, etc.)
### Examples:
```
console.log(false || "Default"); // "Default" (because `false` is falsy)
console.log(0 && "Hello");       // 0 (because `0` is falsy)
console.log(1 && "Hello");       // "Hello" (because `1` is truthy)
```
### 6. Nullish Coalescing Operator (??)
 - Introduced in ES11 (ES2020).
 - Returns the right-hand operand if the left-hand operand is null or undefined, otherwise returns the left-hand operand.
Syntax:
```
operand1 ?? operand2
```
### Examples:
```
let name = null;
console.log(name ?? "Guest"); // "Guest" (because `name` is null)

let age = 0;
console.log(age ?? 18); // 0 (because 0 is not null or undefined)
```
