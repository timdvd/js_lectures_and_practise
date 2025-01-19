'use strict';
/* In JavaScript, conditions allow you to execute code based on whether certain 
   criteria are true or false. These are primarily implemented using conditional statements 
   like if, else, else if, and other constructs. Here's an overview:

   1. if Statement
   The if statement executes a block of code if a specified condition is true.

   Syntax:
   if (condition) {
     Code to execute if the condition is true
   }
   Example:
   let age = 18;
   if (age >= 18) {
     console.log("You are an adult.");
   }



   2. if...else Statement
   The if...else statement provides an alternative block of code to execute if the condition is false.

   Syntax:
   if (condition) {
     Code to execute if the condition is true
   } else {
     Code to execute if the condition is false
   }
   Example:
   let age = 16;
   if (age >= 18) {
     console.log("You are an adult.");
   } else {
     console.log("You are a minor.");
   }



   3. if...else if...else Statement
   This allows you to test multiple conditions in sequence.

   Syntax:
   if (condition1) {
     Code to execute if condition1 is true
   } else if (condition2) {
     Code to execute if condition2 is true
   } else {
     Code to execute if none of the conditions are true
   }

Example:
let score = 85;
if (score >= 90) {
   console.log("Grade: A");
} else if (score >= 75) {
   console.log("Grade: B");
} else {
   console.log("Grade: C");
} */


if(4 == 9){ false
    console.log('Ok!');  // will not execute
}

if(5 == 5){ ture
    console.log('Ok!');  // will execute
}else {
    console('Error');
}


if(num < 49){
    console.log('Error');
}else if (num > 100){
    console.log('More');
}else{
    console.log('Ok');
}

(num === 50) ? console.log('Ok!'): console.log('False');

// Switch Case
const number = 50;
switch (num){
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}