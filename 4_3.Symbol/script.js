'use strict';
/*

Symbol is a built-in object whose constructor returns a primitive value of the symbol type. These values are called symbol values or simply symbols. Their main characteristic is that they guarantee uniqueness. Symbols are often used as unique keys for objects. They do not conflict with keys that might be added by other code and are also hidden from access by external code. This provides a form of weak encapsulation or a weak way of hiding information.

Each call to Symbol() guarantees the creation of a unique symbol. On the other hand, Symbol.for("key") always returns the same symbol for the specified key. When Symbol.for("key") is called, it checks the global symbol registry. If the symbol is found, it is returned; otherwise, a new symbol is created, added to the global registry under the specified key, and returned.

*/
const obj = {
  'name': 'Test',
  [id]: 1,
  getId: function(){
    return this[id];
  }
}

let id = Symbol('id');
obj[id] = 1;

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

for(let value in obj) console.log(value);

///////////////////////////////////////////////////////////
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true