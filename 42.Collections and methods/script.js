'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery[0].remove();
boxesGet[0].remove();

for(let i = 0; i < 5; i++){
  const div = document.createElement('div');
  div.classList.add('box');
  document.body.append(div);
}

console.log(boxesQuery);
console.log(boxesGet);
console.log(document.body.children);

// Array.from(arr) - transform pseudoarray to array
console.log(Array.from(boxesGet));


boxesQuery.forEach(box => {
  if(box.matches('.this')) console.log(box);
})