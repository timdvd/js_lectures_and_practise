"use strict";

//Spread syntax 
function sum(x, y, z) {
    return x + y + z;
}
  
const numbers = [1, 2, 3];
  
console.log(sum(...numbers));
// Expected output: 6
  
console.log(sum.apply(null, numbers));
// Expected output: 6

function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);

var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
  
////////////////////////////////////////////////////////////////////////////

// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
