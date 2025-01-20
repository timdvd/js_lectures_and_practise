# JavaScript String and Integer Methods
## In JavaScript, both strings and integers (numbers) come with built-in methods that allow you to manipulate and perform operations on them efficiently. Here's a summary of common methods for both:

## 1. String Methods

### a. .length
Returns the length of a string (i.e., the number of characters).
```
let str = "Hello";
console.log(str.length); // Output: 5
```

### b. .toUpperCase()
Converts all characters in the string to uppercase.
```
let str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
```

### c. .toLowerCase()
Converts all characters in the string to lowercase.
```
let str = "HELLO";
console.log(str.toLowerCase()); // Output: "hello"
```
### d. .trim()
Removes whitespace from both ends of the string.
```
let str = "  Hello World  ";
console.log(str.trim()); // Output: "Hello World"
```
### e. .substring(start, end)
Extracts a part of a string between two indices.
```
let str = "Hello World";
console.log(str.substring(0, 5)); // Output: "Hello"
```
### f. .slice(start, end)
Similar to .substring(), but allows negative indices to start from the end of the string.
```
let str = "Hello World";
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(-5));    // Output: "World"
```

### g. .indexOf(searchValue)
Returns the index of the first occurrence of the specified value (or -1 if not found).
```
let str = "Hello World";
console.log(str.indexOf("World")); // Output: 6
console.log(str.indexOf("JavaScript")); // Output: -1
```

### h. .replace(searchValue, newValue)
Replaces the first occurrence of a specified value with a new value.
```
let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // Output: "Hello JavaScript"
```

### i. .split(separator)
Splits a string into an array of substrings based on the separator.
```
let str = "Hello World";
let words = str.split(" ");
console.log(words); // Output: ["Hello", "World"]
```
### j. .includes(searchValue)
Checks if a string contains a specified value, returning true or false.
```
let str = "Hello World";
console.log(str.includes("World"));  // Output: true
console.log(str.includes("JavaScript")); // Output: false
```

### k. .charAt(index)
Returns the character at the specified index.
```
let str = "Hello";
console.log(str.charAt(1)); // Output: "e"
```

### l. .repeat(count)
Returns a new string that repeats the original string a specified number of times.
```
let str = "Hello ";
console.log(str.repeat(3)); // Output: "Hello Hello Hello "
```


## 2. Integer (Number) Methods

### a. .toFixed(digits)
Formats a number to a fixed number of decimal places.
```
let num = 5.56789;
console.log(num.toFixed(2)); // Output: "5.57"
```

### b. .toString()
Converts a number to a string.
```
let num = 123;
console.log(num.toString()); // Output: "123"
```

### c. .valueOf()
Returns the primitive value of a number (often used with objects).
```
let num = new Number(123);
console.log(num.valueOf()); // Output: 123
```

### d. Number.isInteger(value)
Checks whether a given value is an integer.
```
let num = 4;
console.log(Number.isInteger(num));  // Output: true

let floatNum = 4.5;
console.log(Number.isInteger(floatNum));  // Output: false
```

### e. Number.parseInt(string)
Parses a string and converts it to an integer.
```
let str = "123.45";
console.log(Number.parseInt(str));  // Output: 123
```

### f. Number.parseFloat(string)
Parses a string and converts it to a floating-point number.
```
let str = "123.45";
console.log(Number.parseFloat(str));  // Output: 123.45
```

### g. .toPrecision(precision)
Formats a number to a specified length (number of significant digits).
```
let num = 123.456;
console.log(num.toPrecision(4));  // Output: "123.5"
```

### h. Math.round(number)
Rounds a number to the nearest integer.
```
let num = 4.7;
console.log(Math.round(num));  // Output: 5
```

### i. Math.floor(number)
Rounds a number down to the nearest integer.
```
let num = 4.7;
console.log(Math.floor(num));  // Output: 4
```

### j. Math.ceil(number)
Rounds a number up to the nearest integer.
```
let num = 4.3;
console.log(Math.ceil(num));  // Output: 5
```

### k. Math.max(...values)
Returns the largest of the given values.
```
console.log(Math.max(1, 5, 3, 9));  // Output: 9
```

### l. Math.min(...values)
Returns the smallest of the given values.
```
console.log(Math.min(1, 5, 3, 9));  // Output: 1
```

## Key Takeaways:
 - String Methods: These methods allow you to manipulate strings, such as modifying case, searching for substrings, replacing parts of the string, and splitting it into an array.
 - Integer (Number) Methods: JavaScript offers a variety of methods for manipulating numbers, converting between types, rounding, and parsing strings into numbers.
Both string and number methods are essential for performing common tasks when working with text and numeric data in JavaScript.
