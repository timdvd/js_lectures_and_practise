# In JavaScript, WeakMap and WeakSet are special collections for storing weakly referenced objects. 
## They are part of the ES6 (ECMAScript 2015) specification and differ from Map and Set in significant ways, particularly in terms of their handling of memory and garbage collection.

## 1. WeakMap
 - A WeakMap is a collection of key-value pairs where keys must be objects, and values can be of any type.
 - The keys are held "weakly," meaning they do not prevent garbage collection of the key object if there are no other references to it.

### Key Features:
 - Keys must be objects (primitive values are not allowed as keys).
 - Values can be of any type.
 - Entries are automatically removed when the key object is garbage-collected, preventing memory leaks.
 - It does not have methods to iterate over its elements (e.g., no forEach, keys, or values methods).
 - Useful for storing metadata or private data associated with objects.

Syntax:
```
const weakMap = new WeakMap();

const obj1 = {};
const obj2 = {};

weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

console.log(weakMap.get(obj1)); // 'value1'
console.log(weakMap.has(obj2)); // true

// When obj1 and obj2 are no longer referenced, their entries are removed from weakMap.
```

![2](https://github.com/user-attachments/assets/3d7ce860-7559-433d-9d3b-7fbcabb8cc31)

## 2. WeakSet
 - A WeakSet is a collection of unique objects (like Set), but the objects are held "weakly."
 - The objects are garbage-collected if there are no other references to them.

### Key Features:
 - Can only store objects (no primitive values like numbers, strings, etc.).
 - Objects are held weakly, meaning they do not prevent garbage collection.
 - It does not have methods to iterate over its elements (e.g., no forEach or values).
 - Useful for tracking objects without preventing their garbage collection.

Syntax:
```
const weakSet = new WeakSet();

const obj1 = {};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false
```

![1](https://github.com/user-attachments/assets/3da021e8-9415-4870-8d0e-c099c3cf17bb)

![4](https://github.com/user-attachments/assets/773e55b1-3a18-4b28-b2a4-006732466d7b)

## Use Cases

### WeakMap:
 - Storing private data for objects:
```
const privateData = new WeakMap();

class Example {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const instance = new Example('John');
console.log(instance.getName()); // 'John'
```

### WeakSet:
Tracking objects without preventing their garbage collection:
```
const seen = new WeakSet();

function process(obj) {
  if (seen.has(obj)) {
    console.log('Already processed');
  } else {
    seen.add(obj);
    console.log('Processing', obj);
  }
}

const obj1 = {};
process(obj1); // 'Processing [object Object]'
process(obj1); // 'Already processed'
```
Both WeakMap and WeakSet are useful in specialized scenarios where memory management and garbage collection are important concerns.
