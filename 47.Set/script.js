'use strict';
/*

  Objects of type "Set" are collections of values. A value in a Set can only appear once; it is unique within the collection. You can iterate over the elements of a Set in the order of their insertion. The insertion order corresponds to the order in which each element was successfully added to the collection using the add() method (i.e., when add() was called, the element was not already in the Set).

  The specification requires the implementation of Sets to "provide, on average, sublinear access time relative to the number of elements in the collection." Consequently, it may be implemented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, provided the complexity is better than O(N).

*/
//////////////////////////////////////////

const arr = [1, 1, 2, 2, 4, 5, 6, 7];

const set = new Set(arr);

console.log(set);

//////////////////////////////////////////

const arr1 = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set1 = new Set(arr1);
set1.add('Ivan').add('Tim').add('Derek').add('Alex');

console.log(set1);

//          set.delete(value);
//          set.has(value);
//          set.clear();
//          set.size;
//          set.keys();

for(let value of set1) console.log(value);
set1.forEach((value, valueAgaining, set) => {
  console.log(value, valueAgaining);
});

console.log(set1.keys());
console.log(set1.values());
console.log(set1.entries());

function unique(arr){
  return Array.frem(new Set(arr));
}

/////////////////////////////////////////////////////

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("текст"); // Set(3) { 1, 5, 'текст' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o ссылается на другой объект, так что это нормально

mySet1.has(1); // true
mySet1.has(3); // false, поскольку 3 не был добавлен в набор
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Текст".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // удаляет элемент 5 из set
mySet1.has(5); // false, 5 был удалён

mySet1.size; // 4, поскольку мы удалили одно значение

mySet1.add(5); // Set(5) { 1, "текст", {...}, {...}, 5 } - ранее удаленный элемент будет добавлен как новый элемент, он не сохранит свое первоначальное положение до удаления

console.log(mySet1); // Set(5) { 1, "текст", {…}, {…}, 5 }

////////////////////////////////////////////////////////////

for (const item of mySet1) {
  console.log(item);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// ключ и значение здесь одинаковы
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Преобразуем объект Set в объект Array с помощью Array.from
const myArr = Array.from(mySet1); // [1, "текст", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// следующее также будет работать, если запустить его в HTML-документе
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// преобразование между Set и Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// пересечение можно представить следующим образом
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// разность можно представить следующим образом
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// итерироваться можно с помощью forEach()
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4