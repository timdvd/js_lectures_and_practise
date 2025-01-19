'use strict';

/*

    The nullish coalescing operator (??) is a logical operator that returns the value of the right-hand operand 
    if the left-hand operand is null or undefined. Otherwise, it returns the value of the left-hand operand.

    This operator can be considered a special case of the logical OR operator (||), which returns the right-hand 
    operand if the left-hand operand contains any falsy value, not just null or undefined. In other words, if you 
    use the || operator to assign a default value to another variable (e.g., foo), you might encounter unexpected 
    behavior if you consider certain falsy values (like '' or 0) as valid for use. Below are some examples

*/

////////////////////////////////////////////////////////////////
const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changePerams(elem, h, w){
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changePerams(box, newHeight, newWidth);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

let userName = null;
console.log(userName ?? 'User'); // User

userName = 0;
console.log(userName ?? 'User'); // 0

userName = NaN;
console.log(userName ?? 'User'); // NaN

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const nullValue = null;
const emptyText = ""; // ложноподобное
const someNumber = 42;

const valA = nullValue ?? "значение для A";
const valB = emptyText ?? "значение для B";
const valC = someNumber ?? 0;

console.log(valA); // "значение для A"
console.log(valB); // "" (поскольку пустая строка не приравнивается к null или undefined)
console.log(valC); // 42

////////////////////////////////////////////////////////////////

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0