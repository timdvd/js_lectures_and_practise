'use strict';

// 1. Arithmetic Operators
// Perform basic mathematical operations:

// + (Addition): Adds two numbers or concatenates strings.
// Example: 5 + 3 // 8

// - (Subtraction): Subtracts one number from another.
// Example: 5 - 3 // 2

// * (Multiplication): Multiplies two numbers.
// Example: 5 * 3 // 15

// / (Division): Divides one number by another.
// Example: 6 / 2 // 3

// % (Modulus): Returns the remainder of division.
// Example: 5 % 2 // 1

// ** (Exponentiation): Raises the base to the power of the exponent.
// Example: 2 ** 3 // 8



// 2. Assignment Operators
// Assign values to variables:

// =: Assigns a value.
// Example: let x = 5

// +=: Adds and assigns.
// Example: x += 3 // x = x + 3

// -=: Subtracts and assigns.
// Example: x -= 2 // x = x - 2

// *=: Multiplies and assigns.
// Example: x *= 2 // x = x * 2

// /=: Divides and assigns.
// Example: x /= 2 // x = x / 2

// %=: Modulus and assigns.
// Example: x %= 2 // x = x % 2



// 3. Comparison Operators
// Compare values and return true or false:

// ==: Equal to (compares value only).
// Example: 5 == "5" // true

// ===: Strictly equal to (compares value and type).
// Example: 5 === "5" // false

// !=: Not equal to.
// Example: 5 != "5" // false

// !==: Strictly not equal to.
// Example: 5 !== "5" // true

// <: Less than.
// Example: 3 < 5 // true

// >: Greater than.
// Example: 5 > 3 // true

// <=: Less than or equal to.
// Example: 3 <= 3 // true

// >=: Greater than or equal to.
// Example: 5 >= 3 // true



// 4. Logical Operators
// Combine multiple conditions:

// && (AND): Returns true if all conditions are true.
// Example: true && false // false

// || (OR): Returns true if at least one condition is true.
// Example: true || false // true

// ! (NOT): Reverses the truthiness.
// Example: !true // false


console.log('arr' + ' - object'); // 'arr - object'
console.log(4 + +'5'); // 9

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);
console.log(2**4 == 8);
console.log(2 + 2 * 2 != '6');
console.log(2 + 2 * 2 !== '6');

const isChecked = ture,
      isClose = false;

console.log(isChecked && isClose); // false
console.log(isChecked || isClose); // true