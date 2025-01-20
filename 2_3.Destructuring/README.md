# JavaScript Destructuring
## Destructuring is a convenient syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It makes it easier to extract multiple properties from an object or elements from an array in a clean and concise way.

## 1. Array Destructuring
Array destructuring allows you to unpack values from an array and assign them to variables in a single statement.

Syntax:
```
let [variable1, variable2, variable3] = array;
```
### Example 1: Basic Array Destructuring
```
let fruits = ["apple", "banana", "cherry"];
let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);  // Output: apple
console.log(fruit2);  // Output: banana
console.log(fruit3);  // Output: cherry
```
In this example, the array fruits is destructured into individual variables fruit1, fruit2, and fruit3.

### Example 2: Skipping Elements
You can skip elements by leaving empty spaces in the destructuring pattern.
```
let fruits = ["apple", "banana", "cherry"];
let [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit);  // Output: apple
console.log(thirdFruit);  // Output: cherry
```
Here, the second element is skipped using the empty comma ,.

### Example 3: Default Values
You can assign default values in case the array doesn't contain enough values.
```
let fruits = ["apple"];
let [firstFruit, secondFruit = "banana"] = fruits;

console.log(firstFruit);  // Output: apple
console.log(secondFruit); // Output: banana (default value)
```
If secondFruit does not exist in the array, it gets assigned the default value "banana".

## 2. Object Destructuring
Object destructuring allows you to unpack properties from an object and assign them to variables.

Syntax:
```
let {property1, property2, property3} = object;
```

### Example 1: Basic Object Destructuring
```
let person = { name: "Alice", age: 25, city: "Wonderland" };
let { name, age, city } = person;

console.log(name);  // Output: Alice
console.log(age);   // Output: 25
console.log(city);  // Output: Wonderland
```
In this example, the properties name, age, and city of the person object are destructured into variables with the same names.

### Example 2: Renaming Variables
If you want to assign a property to a variable with a different name, you can do so using a colon (:).
```
let person = { name: "Alice", age: 25 };
let { name: personName, age: personAge } = person;

console.log(personName);  // Output: Alice
console.log(personAge);   // Output: 25
```
Here, the property name is assigned to the variable personName, and age is assigned to personAge.

### Example 3: Default Values
You can provide default values in case a property is undefined.
```
let person = { name: "Alice" };
let { name, age = 30 } = person;

console.log(name);  // Output: Alice
console.log(age);   // Output: 30 (default value)
```
If the age property is not present in the person object, the variable age will take the default value 30.

## 3. Nested Destructuring
You can destructure nested arrays and objects as well.

### Example 1: Nested Array Destructuring
```
let coordinates = [10, [20, 30]];
let [x, [y, z]] = coordinates;

console.log(x);  // Output: 10
console.log(y);  // Output: 20
console.log(z);  // Output: 30
```
Here, the array coordinates contains another array, and both are destructured into variables.

### Example 2: Nested Object Destructuring
```
let person = { name: "Alice", address: { street: "123 Main St", city: "Wonderland" } };
let { name, address: { street, city } } = person;

console.log(name);    // Output: Alice
console.log(street);  // Output: 123 Main St
console.log(city);    // Output: Wonderland
```
In this example, the address property is an object, and we destructure its properties street and city.

## 4. Destructuring in Function Parameters
Destructuring can also be used directly in function parameters to extract values from objects or arrays passed as arguments.

### Example 1: Object Destructuring in Function Parameters
```
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

let person = { name: "Alice", age: 25 };
```
greet(person);  // Output: Hello, my name is Alice and I am 25 years old.
Here, we use object destructuring directly in the function parameter to extract the name and age properties from the person object.

### Example 2: Array Destructuring in Function Parameters
```
function sum([a, b]) {
  return a + b;
}

let numbers = [5, 10];
console.log(sum(numbers));  // Output: 15
```
In this case, we use array destructuring directly in the function parameter to extract the values from the numbers array.

## Key Takeaways
 - Array Destructuring: Allows you to unpack values from an array and assign them to variables.
 - Object Destructuring: Allows you to unpack properties from an object and assign them to variables.
 - Renaming: You can rename the variables using the colon (:) syntax.
 - Default Values: You can assign default values for undefined properties or array elements.
 - Nested Destructuring: You can destructure arrays or objects that are nested inside other arrays or objects.
 - Destructuring in Functions: Destructuring is useful in function parameters for cleaner and more readable code.
Destructuring is a powerful tool for managing and extracting data efficiently in JavaScript, making your code more readable and concise.
