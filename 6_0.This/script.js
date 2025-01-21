//'use strict';

function showThis(a, b){
  console.log(this);
  function sum(){
    return a + b;
  }
  console.log(sum());
}
showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function(){
    console.log(this);
  }
}
obj.sum();

function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log('Hello! ' + this.name);
  };
}
let ivan = new User('Ivan', 20);


function sayName(){
  console.log(this);
  console.log(this.name);
}

const user = {
  name: 'John'
};
sayName.call(user);
sayName.apply(user);

function count(num){
  return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));
// 1) Simple function: this = window, use strict - undefined
// 2) Object content is object itself
// 3) this in classes and constructors are new object example

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  this.style.backgroundColor = 'red';
  console.log(this);
});
