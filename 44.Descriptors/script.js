'use strict';
/*

The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as they would be iterated over by a for...in loop. The difference is that a for...in loop enumerates properties from the prototype chain as well.

The Object.values() method returns an array of the values of a given object's enumerable properties, in the same order as they would be iterated over by a for...in loop. The difference is that a for...in loop also enumerates properties from the prototype chain.

The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as they would be iterated over by a for...in loop. The difference is that a for...in loop also enumerates properties from the prototype chain.

The order of elements in the array returned by Object.entries() does not depend on how the object is defined. If a specific order is needed, the array must be sorted before using the method, for example:

Object.entries(obj).sort((a, b) => a[0] - b[0]);

*/
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showPublicData: function(){
      console.log(`${this.name} - ${this.surname}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'name', {writable: false});
Object.defineProperty(user, 'gender', {value: 'male'});
Object.defineProperty(user, 'showPublicData', {enumerable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

for(let key in user) console.log(key);
// writable
// enumerable
// configurable