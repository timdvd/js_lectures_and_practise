# Arrays

## An array is a collection of ordered elements (values), which can be of any type (numbers, strings, objects, etc.).

### Features of Arrays:
 - Elements are stored in a zero-based index.
 - Arrays are mutable (can be changed after creation).
 - Arrays can store mixed data types.
   
### Creating Arrays:
```
// Using array literal
let fruits = ["apple", "banana", "cherry"];
```
```
// Using the Array constructor
let numbers = new Array(1, 2, 3); // Not commonly used
```

### Accessing Elements:
```
console.log(fruits[0]); // "apple" (first element)
fruits[1] = "blueberry"; // Modifying an element
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

### Common Array Methods:
```
let arr = [1, 2, 3, 4, 5];
```

### Adding and removing elements
```
arr.push(6);       // Adds to the end: [1, 2, 3, 4, 5, 6]
arr.pop();         // Removes from the end: [1, 2, 3, 4, 5]
arr.unshift(0);    // Adds to the start: [0, 1, 2, 3, 4, 5]
arr.shift();       // Removes from the start: [1, 2, 3, 4, 5]
```

### Iterating through arrays
```
arr.forEach((num) => console.log(num)); // Logs each number
```

### Other methods
```
arr.includes(3);   // true (checks if 3 is present)
arr.indexOf(4);    // 3 (index of 4)
arr.reverse();     // Reverses array: [5, 4, 3, 2, 1]
arr.slice(1, 3);   // Extracts: [4, 3] (doesn't modify original)
arr.splice(1, 2);  // Removes 2 elements starting at index 1: [5, 1]
```


# Objects

## An object is a collection of key-value pairs. Keys (or properties) are strings or symbols, while values can be any type.

### Features of Objects:
 - Used to store and organize data.
 - Properties can be accessed or modified dynamically.

### Creating Objects:
```
// Using object literal
let person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
```
```
// Using the Object constructor
let car = new Object();
car.make = "Toyota";
car.model = "Corolla";
```

### Accessing Properties:
```
// Dot notation
console.log(person.name); // "John"

// Bracket notation
console.log(person["age"]); // 30
```
### Adding/Modifying properties
```
person.city = "New York";
person.age = 31;
Common Object Methods:
let user = { name: "Alice", age: 25 };
```
### Getting keys and values
```
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Alice", 25]
```
### Checking for a property
```
console.log("name" in user); // true
```
### Iterating over properties
```
for (let key in user) {
  console.log(`${key}: ${user[key]}`); // name: Alice, age: 25
}
```

### Merging objects
```
let address = { city: "Seattle", state: "WA" };
let merged = Object.assign({}, user, address);
// Or using the spread operator
let merged2 = { ...user, ...address };
```


### Combining Arrays and Objects
You can use arrays inside objects or objects inside arrays:
```
let company = {
  name: "TechCorp",
  employees: ["Alice", "Bob", "Charlie"],
};

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
```
![Screenshot 2025-01-19 213137](https://github.com/user-attachments/assets/f3bf67fd-fb8c-4dff-bd16-dfa2bf38e0fd)
