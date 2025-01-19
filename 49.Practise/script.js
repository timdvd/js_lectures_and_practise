'use strict';

// A complex problem on calculating the number of pages.

function amountOfPages(summary){
  let result = '';
  let n = 0;
  for(let i = 1; i <= summary; i++){
      result += i;
      console.log(result);
      if( result.length === summary){
          n = i;
          break;
      }
  }
  return n;
}

console.log(amountOfPages(27)); // 18

// A complex problem involving string manipulation.

function isPangram(string) {
  string = string.toLowerCase();
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  return alpha.split('').every((x) => {
      return (string.indexOf(x) !== -1);
  })
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true

// A complex problem involving recursion.

function deepCount(a){
  let count = a.length;
  for(let i = 0; i < a.length; i++){
      if(Array.isArray(a[i])){
          count += deepCount(a[i]);
      }
  }
  return count;
}

console.log(deepCount('arvvdsfs'));