//1. What Are Variables?
//Variables are containers for storing data. They allow you to save information that can be used later in your code.

//Declaring Variables
//In JavaScript, you can create a variable using the keywords let, const, or var:

//let: Use when the value of the variable might change later.
//const: Use when the value of the variable should remain constant.
//var: An older way to declare variables; let and const are preferred in modern JavaScript.

"use strict";

let number = 5;
const leftBorderWidth = '20px';

number = 10;
console.log(number);

const obj = {
    a: 10,
    b: 15,
    c: 20,
    d: 50
};

console.log(obj.b);
console.log(obj['c']);

{
    let result = 50;
    var result2 = 30;
}
// Error
console.log(result);
// It works
console.log(result2);