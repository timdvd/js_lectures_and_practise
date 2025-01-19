"use strict";


/*
    Objects are associative arrays with additional capabilities.

    They store properties (key-value pairs), where:

    Keys must be strings or symbols (usually strings).
    Values can be of any type.
    To access a property, we can use:

    Dot notation: obj.property.
    Bracket notation: obj["property"]. Bracket notation allows using a variable as the key, e.g., obj[varWithKey].
    Additional operators:

    Delete a property: delete obj.prop.
    Check for property existence: "key" in obj.
    Iterate over properties: for (let key in obj).
*/

const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
      border: 'black',
      bg: 'red',
    },
    makeTest: function(){ console.log('Test')}
}

options.makeTest();
const {border, bg} = options.colors;
console.log(options.name);
console.log(options['height']);

/*

  The "for..in" loop
  To iterate over all the properties of an object, the for..in loop is used. This loop differs from the for(;;) loop discussed earlier.

  Syntax:
  for (key in object) {
    // The loop body is executed for each property of the object
  }

*/


for(let key in options){
    if(typeof(options[key]) === 'object'){
      for(let i in options[key]){
        console.log(`Option ${key} имеет значение ${options[key][i]}`);
      }
    }else{
        console.log(`Option ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length);

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  console.log( key );  // name, age, isAdmin
  // значения ключей
  console.log( user[key] ); // John, 30, true
}

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}