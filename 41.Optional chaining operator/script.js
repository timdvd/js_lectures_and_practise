'use strict';

/*

   The optional chaining operator ?. allows you to access the value of a property at any level of nesting 
   in a chain of interconnected objects without having to check each intermediate property for existence. 
   The ?. operator works similarly to the . operator, except that it does not throw an exception if the object 
   whose property or method is being accessed is null or undefined. In such cases, it returns undefined.

*/

////////////////////////////////////////////////////////////////
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
    },
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // Expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // Expected output: undefined

////////////////////////////////////////////////////////////////

let customer = {
    name: "Carl",
    details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city

////////////////////////////////////////////////////////////////

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

console.log(block?.textContent); // return undefined
block?.textContent = '123';

const userData = {
    name: 'Ivan',
    age: null,
    say: function(){
        console.log('Hello')
    }
}
userData.say();
userData.hey?.();

//{{{
  if(userData && userData.skills && userData.skills.js){
      console.log(userData.skills.js);
  }
  console.log(userData.skills.js);
// }}}

// Faster and shorter version of upper one 
console.log(userData?.skills?.js);