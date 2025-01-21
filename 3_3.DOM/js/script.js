'use strict';

const box = documeny.getElementById('box');
console.log('box');

const btn1 = document.getElementsByTagName('button')[0];
const btn2 = document.getElementsByTagName('button')[1];

const btns = document.getElementsByTagName('button');
console.log(btns');
console.log(btns[0]);
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
