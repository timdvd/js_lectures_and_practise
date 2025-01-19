'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showPublicData: function(){
      console.log(`${this.name} - ${this.surname}`);
    }
}

Array.prototype.someMethod = function(){

}

for(let key in user){
    console.log(user[key]);
}


const str = 'string';
for(let key in str){
  console.log(str[key]);
}


const salaries = {
  john: 500,
  ivan: 1000,
  ann: 700,
  sayHello: function(){
    console.log('Hello');
  },
};

salaries[Symbol.iterator] = function(){
    return {
      current: this.john,
      last: this.ann,
      next(){
        if(this.current < this.last){
          this.current = this.current + 500;
          return {done: false, value: this.current}
        }else{
          return {done: true}
        }
      }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
