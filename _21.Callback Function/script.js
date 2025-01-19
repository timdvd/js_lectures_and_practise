"use strict";

function first(){
  setTimeout(function(){
    console.log(1);
  }, 500);
}

function learnJS(lang, callback){
  console(`I learn ${lang}`);
  callback(); 
}

function done(){
  console.log('I did it');
}

learnJS('JavaScript', function(){
  console.log('I finished the course');
});

learnJS('PHP', done);