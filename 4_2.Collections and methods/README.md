#In JavaScript, collections are data structures used to store and manipulate groups of data. Commonly used collections include arrays, sets, and maps, each with their own specific methods for interacting with the data. Here's an overview of collections and their methods:

## 1. Arrays
An array is an ordered collection of elements, which can include any data type.

![Screenshot 2025-01-20 201339](https://github.com/user-attachments/assets/00a83cf4-8cd8-4a54-8122-271563cbfcd7)

## 2. Sets
A Set is a collection of unique values.

![Screenshot 2025-01-20 205811](https://github.com/user-attachments/assets/963614f5-3d5f-4133-84e3-12f2a6b8d0de)

```
const mySet = new Set();
mySet.add(1).add(2).add(2); // {1, 2} (duplicates are ignored)
console.log(mySet.has(1)); // true
mySet.delete(1);           // Removes 1
console.log(mySet.size);   // 1
```

## 3. Maps
A Map is a collection of key-value pairs, where keys can be of any type.

![Screenshot 2025-01-20 205912](https://github.com/user-attachments/assets/e0c8d4cf-6858-4d89-bc7b-f989a0207df0)

```
const myMap = new Map();
myMap.set('name', 'Alice').set('age', 25);
console.log(myMap.get('name')); // 'Alice'
console.log(myMap.has('age'));  // true
myMap.delete('name');
console.log(myMap.size);        // 1
```

## 4. WeakSet and WeakMap
WeakSet and WeakMap are similar to Set and Map, but they hold weak references to their elements (objects only), allowing for garbage collection when the object is no longer referenced elsewhere.

![Screenshot 2025-01-20 210011](https://github.com/user-attachments/assets/552e5285-8930-4db6-8916-d114d159e66c)

## 5. Objects
Objects are collections of key-value pairs where keys are strings or symbols.

![Screenshot 2025-01-20 210106](https://github.com/user-attachments/assets/55445639-718f-45a0-af98-2ef360650268)
