"use strict";

/*
    Destructuring Assignment

    Destructuring assignment is a special syntax that allows us to "unpack" arrays or objects into multiple variables, which can sometimes be more convenient.

    Destructuring also works exceptionally well with complex functions that have many parameters, default values, and so on. We will see this soon.

    Array Destructuring
    Here’s an example of array destructuring into variables:
*/

let [first, second, third] = ["apple", "banana", "cherry"];
console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "cherry"



// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor


let [fistName, suname] = "Ilya Kantor".split(' ');
alert(fistName); // Ilya
alert(suname);  // Kantor



let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);