"use strict";

const arr = [1, 2, 3, 4, 6, 9];

arr.pop(); // - remove last element of array
arr.push(15); // - add 15 to array in the end
arr.shift(); // -remove element from the begining of array
arr.unshift(5); // - add element to the begining

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}   

const str = prompt("", "");
const products = str.split(", ");
products.sort(compareNum);
console.log(products.join('; '));

function compareNum(a, b){
    return a - b;
}


arr.forEach(function(item, index, arr){
    console.log(`${index}: ${item} внутри массива ${arr}`);
});