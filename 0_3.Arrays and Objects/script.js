"use strict";

// The typeof operator returns a string indicating the type of the operand's value.

console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"


// Array
const arr = [1,2,3];
console.log(arr[1]);
arr[4] = '12345';
arr[5] = 'true';
console.log(arr);

// Object
const obj = {
    Anna: 500,
    'Sam': 600
};
console.log(obj['Anna']);

obj['Derek'] = 700;
obj['Ben'] = 650;

console.log(obj);


let storeName = 'SimpleStore';
let storeDescription = {
    budget: 10000,
    employees: ['Jacob', 'Sam', 'Alice'],
    products: {
        samsung: 800,
        iphone: 1000
    },
    open: true,
}