'use strict';

/*
  let hamburger = true;
  let fries = false;

  if(hamburger && fries){
    console.log('Я сыт!');
  }

  console.log((hamburger && fries)); // false

  let fries = true;
  console.log((hamburger && fries)); // true
*/

let hamburgers = 2;
let frie = 1;

if(hamburgers === 3 && frie){
  console.log('Все сыты!'); // will not execute
}else {
  console.log('Мы уходим'); // will execute
}




console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
