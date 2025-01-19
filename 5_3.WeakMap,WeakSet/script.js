'use strict';

let user = {name: 'Ivan'};
// let map = new Map();
let map = new WeakMap();
map.set(user, 'data');

user = null;
const arr = [user];

console.log(map.keys());
console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'elena'};
let alex = {name: 'alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true

// WeakSet
// add, has, delete

let messages = [
    {text: 'Hello', from: 'Derek'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'M'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log(readMessages.has(messages[0]));