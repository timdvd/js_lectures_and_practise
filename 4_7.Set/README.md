# A Set in JavaScript 
## is a collection of unique values. It is a built-in object introduced in ES6 (ECMAScript 2015) that lets you store values of any type (primitive or object), ensuring no duplicates exist.

## Key Features of a Set
 - Unique Values: A Set automatically eliminates duplicate entries.
 - Order of Values: A Set maintains the order of insertion.
 - Type of Values: Any type of value can be stored (e.g., strings, numbers, objects, etc.).

## Creating a Set

### Empty Set:
```
const mySet = new Set();
```

###Initializing with Values:
```
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet); // Set(5) {1, 2, 3, 4, 5}
```

### Eliminating Duplicates:
```
const mySet = new Set([1, 2, 2, 3, 3, 4]);
console.log(mySet); // Set(4) {1, 2, 3, 4}
```

## Common Methods of a Set
### add(value): Adds a value to the Set.
```
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, won't be added
console.log(mySet); // Set(2) {1, 2}
```

### has(value): Checks if a value exists in the Set.
```
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false
```

### delete(value): Removes a value from the Set.
```
mySet.delete(1);
console.log(mySet); // Set(1) {2}
```

### size: Returns the number of elements in the Set.
```
console.log(mySet.size); // 1
```

### clear(): Removes all elements from the Set.
```
mySet.clear();
console.log(mySet); // Set(0) {}
```

## Iterating Over a Set
### Using for...of:
```
const mySet = new Set(['a', 'b', 'c']);
for (const value of mySet) {
  console.log(value); // 'a', 'b', 'c'
}
```

### Using forEach():
```
mySet.forEach((value) => {
  console.log(value); // 'a', 'b', 'c'
});
```

### Using keys(), values(), and entries():
 - keys() and values() return the same iterator (since a Set has no keys, only values).
 - entries() returns [value, value] pairs.
```
console.log([...mySet.keys()]);    // ['a', 'b', 'c']
console.log([...mySet.values()]); // ['a', 'b', 'c']
console.log([...mySet.entries()]); // [['a', 'a'], ['b', 'b'], ['c', 'c']]
```

## Removing Duplicates from Arrays
One of the most common uses of a Set is to eliminate duplicate values from an array.
```
const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
```

## Union, Intersection, and Difference
You can perform basic set operations using Set and other JavaScript features.

### Union: Combine two sets.
```
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Set(5) {1, 2, 3, 4, 5}
```

### Intersection: Find common values between two sets.
```
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set(1) {3}
```

### Difference: Find values in one set that are not in the other.
```
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set(2) {1, 2}
```

![2](https://github.com/user-attachments/assets/868b5823-b8c7-4e33-af0a-9e2926d26c3f)
