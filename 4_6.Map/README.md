# The Map object in JavaScript 
## is a built-in data structure that allows you to store key-value pairs. Unlike objects, which can only have strings or symbols as keys, a Map can have any value as a key, including objects, functions, and primitives.

## Key Features of a Map
 - Ordered Keys: The keys in a Map are ordered by insertion.
 - Any Type of Key: Keys can be of any type (objects, strings, numbers, etc.).
 - Size Property: Map has a size property to determine the number of key-value pairs.
 - No Key Conversion: Unlike objects, Map does not convert keys to strings.

### Creating a Map
```
// Create a new Map
const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'isStudent');

// Check size
console.log(myMap.size); // 3
```

### Common Methods of a Map
 - set(key, value)
Adds or updates a key-value pair in the Map.
```
myMap.set('city', 'New York');
```

 - get(key)
Retrieves the value associated with a key.
```
console.log(myMap.get('name')); // 'Alice'
console.log(myMap.get(true));  // 'isStudent'
```

 - has(key)
Checks if a key exists in the Map.
```
console.log(myMap.has('age')); // true
console.log(myMap.has('salary')); // false
```

 - delete(key)
Removes a key-value pair from the Map.
```
myMap.delete('age');
console.log(myMap.has('age')); // false
```

 - clear()
Removes all key-value pairs from the Map.
```
myMap.clear();
console.log(myMap.size); // 0
```

 - size
Returns the number of key-value pairs in the Map.
```
console.log(myMap.size); // Number of entries in the Map
```

## Iterating Over a Map

### for...of Loop
```
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'New York']
]);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25
// city: New York
```

### Using forEach
```
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

### keys(), values(), entries()
 - keys(): Returns an iterator for the keys.
 - values(): Returns an iterator for the values.
 - entries(): Returns an iterator for [key, value] pairs.
```
console.log([...myMap.keys()]);   // ['name', 'age', 'city']
console.log([...myMap.values()]); // ['Alice', 25, 'New York']
console.log([...myMap.entries()]); // [['name', 'Alice'], ['age', 25], ['city', 'New York']]
```
![1](https://github.com/user-attachments/assets/45aecb1f-a5b0-43ab-9795-9b66b61ab081)

### Example: Using Objects as Keys
```
const map = new Map();
const objKey = { id: 1 };

map.set(objKey, 'User Data');
console.log(map.get(objKey)); // 'User Data'
```
This would not work with an object because objects convert keys to strings.

### Chaining set() Calls
The set() method returns the Map itself, allowing method chaining.
```
const map = new Map()
  .set('a', 1)
  .set('b', 2)
  .set('c', 3);

console.log(map.size); // 3
```

## WeakMap
If you only need objects as keys and want keys to be weakly referenced (i.e., they can be garbage collected), you can use a WeakMap. However, it only allows objects as keys and does not have methods like keys(), values(), or entries().

Let me know if you'd like to explore more Map use cases or features!
