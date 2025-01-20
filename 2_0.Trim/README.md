# JavaScript trim() Method
## The trim() method in JavaScript is used to remove whitespace from both ends of a string. It does not affect whitespace between words or characters in the middle of the string.

Syntax:
```
str.trim()
```
str: The string on which the trim() method is called.
### Returns:
A new string with the leading and trailing whitespace removed. The original string is not modified.

### Example 1: Basic Usage
```
let str = "   Hello World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello World!"
```
In this example, the leading and trailing spaces are removed, but the spaces between "Hello" and "World!" remain.


### Example 2: Using trim() with only leading or trailing spaces
```
let str1 = "   Hello";
let str2 = "World!   ";

console.log(str1.trim()); // Output: "Hello"
console.log(str2.trim()); // Output: "World!"
```
In these cases, trim() removes only the spaces at the beginning or the end of the string.


### Example 3: When there are no leading or trailing spaces
```
let str = "No spaces here!";
console.log(str.trim()); // Output: "No spaces here!"
```
If there are no leading or trailing spaces, trim() has no effect and returns the string as-is.

## Key Points:
 - Whitespace includes spaces, tabs (\t), and newlines (\n).
 - The trim() method does not modify the original string; it returns a new string.
 - No impact on whitespace between words in the middle of the string.
## Related Methods:
 - trimStart() (or trimLeft()): Removes whitespace from the start (left side) of the string.
 - trimEnd() (or trimRight()): Removes whitespace from the end (right side) of the string.

### Example:
```
let str = "   Hello World!   ";

console.log(str.trimStart()); // Output: "Hello World!   "
console.log(str.trimEnd());   // Output: "   Hello World!"
```
The trim() method is helpful for cleaning user input, trimming extra spaces before or after a string that could affect processing or formatting.
