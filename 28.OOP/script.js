"use strict";

let str = 'some';
let str_obj = new String();

console.log(typeof(str));
console.log(typeof(str_obj));

const soldier = {
    health: 400,
    armor: 150,
    sayHello: function(){
        console.log('Hello');
    }
}

const john = {
    health: 100,
    armor: 100
}


// Older version
john.__proto__ = soldier;

// New version
Object.setPrototypeOf(john, soldier);
// Another version
const sam = Object.create(soldier);