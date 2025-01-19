'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

const width = box.clientWidth;
const height = box.clientHeight;
const offsetwidth = box.offsetWidth;
const offsetheight = box.offsetHeight;
const scrwidth = box.scrollWidth;
const scrheight = box.scrollHeight;

console.log(width, height);
console.log(offsetwidth, offsetheight);
console.log(scrwidth, scrheight);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

const style = window.getComputedStyle(box);

console.log(style);