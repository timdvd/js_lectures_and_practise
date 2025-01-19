JavaScript String Interpolation

String interpolation in JavaScript allows you to embed variables or expressions into strings. This is done using template literals, introduced in ES6 (ECMAScript 2015).

Syntax of Template Literals:

Template literals use backticks (`) instead of single or double quotes.

Variables or expressions are inserted using the syntax ${expression}.
====================================================================
Basic Example:

let name = "Alice";

let age = 25;

let message = `My name is ${name}, and I am ${age} years old.`;
console.log(message); // Output: My name is Alice, and I am 25 years old.

====================================================================

Advantages of Interpolation:
=====================
 - Dynamic Content: Easily embed variables or expressions.
 - Multi-line Strings: Template literals support multi-line strings without needing escape characters.
 - Readable and Concise: Simplifies string concatenation.
====================================================================

Embedding Expressions:
You can include any valid JavaScript expression inside the ${} syntax.

let a = 10;
let b = 20;

console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 10 and 20 is 30.

Multi-line Strings
With backticks, you can write multi-line strings directly.
let multiLine = `This is a string
that spans multiple
lines.`;

console.log(multiLine);
// Output:
// This is a string
// that spans multiple
// lines.
Using Functions Inside Interpolation

You can call functions directly inside the ${} syntax.
let greet = (name) => `Hello, ${name}!`;

console.log(`${greet("Bob")}`); // Output: Hello, Bob!
Template Literals vs String Concatenation

With older string concatenation:
let name = "Alice";
let message = "My name is " + name + ".";
console.log(message); // My name is Alice.

With template literals:
let name = "Alice";
let message = `My name is ${name}.`;
console.log(message); // My name is Alice.
Template literals are more concise, easier to read, and more versatile.
