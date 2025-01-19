'use strict';

const now = new Date();
const past = new Date('2020-05-01');

console.log(now);
console.log(past);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());

let start = new Date();
for(let i = 0; i < 10000; i++){
    let some = i ** 3;
}

let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`);