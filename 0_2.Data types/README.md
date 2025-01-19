Primitive Data Types
These are immutable and stored directly in memory.

a. Number:
 - Represents numeric values, including integers and floating-point numbers.

let age = 25;       // Integer
let price = 99.99;  // Float
let inf = Infinity; // Special value
let nan = NaN;      // "Not a Number"

b. String:
 - Represents text, enclosed in single ('), double ("), or backticks (` for templates).

let name = "John";
let greeting = `Hello, ${name}`; // Template literal

c. Boolean:
 - Represents true or false.

let isLoggedIn = true;
let hasAccess = false;

d. Undefined:
 - A variable that has been declared but not assigned a value.

let x;
console.log(x); // undefined

e. Null:
 - Represents an intentional absence of value.

let user = null;

f. Symbol (ES6):
 - Represents unique identifiers, often used for object properties.

let id = Symbol('id');

g. BigInt (ES11):
 - For integers larger than the safe range for Number.

let bigNumber = 123456789012345678901234567890n; // Note the 'n'
