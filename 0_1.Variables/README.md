
# In JavaScript, variables are containers for storing data values. You can declare variables using the following keywords:


## 1. var (function-scoped):
 - Scope: Function-scoped (available throughout the function they are declared in).
 - Hoisting: var variables are hoisted (moved to the top of their scope) but initialized with undefined.
 - Redeclaration: Can be redeclared in the same scope.
 - Usage: Considered outdated and generally avoided in modern JavaScript.

var x = 10;
if (true) {  
    var x = 20; // Modifies the same x   
}  

console.log(x); // 20

## 2. let (block-scoped):
 - Scope: Block-scoped (available only within the block {} they are declared in).
 - oisting: let is hoisted but not initialized (accessing it before declaration results in a ReferenceError).
 - Redeclaration: Cannot be redeclared in the same scope.
 - Usage: Commonly used for variables that might change value.

let y = 10;    
if (true) {   
    let y = 20; // Creates a new y within the block   
    console.log(y); // 20    
}    
console.log(y); // 10    

## 3. const (block-scoped):
 - Scope: Block-scoped (like let).
 - Hoisting: const is hoisted but not initialized (accessing it before declaration results in a ReferenceError).
 - Immutability: The variable itself cannot be reassigned, but the value inside (if it's an object or array) can be modified.
 - Usage: Used for variables that should not be reassigned.

const z = 10;
// z = 20; // Error: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // This is allowed
console.log(obj); // { a: 2 }

![Screenshot 2025-01-19 212512](https://github.com/user-attachments/assets/2cc69198-84d4-4c06-913b-687a827cdc31)

