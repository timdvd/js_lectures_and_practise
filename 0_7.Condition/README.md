# JavaScript Conditions
## JavaScript conditions are used to execute code based on whether a condition is true or false. These are commonly implemented using conditional statements like if, else, else if, and switch. Here’s an overview:

### 1. if Statement
The if statement executes a block of code if the condition evaluates to true.
```
if (condition) {
  // Code to execute if condition is true
}
```
### Example:
```
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

### 2. if-else Statement
The if-else statement adds an alternative block of code to execute if the condition is false.
```
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```
### Example:
```
let age = 16;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

### 3. if-else if-else Statement
This allows for multiple conditions to be tested in sequence. The first condition that evaluates to true will have its block executed.
```
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if all conditions are false
}
```
### Example:
```
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

### 4. Ternary Operator
The ternary operator is a shorthand for an if-else statement. It takes three parts: condition ? expr1 : expr2.
```
let result = (condition) ? valueIfTrue : valueIfFalse;
```
### Example:
```
let age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);
```
### 5. switch Statement
The switch statement is used to test multiple conditions against a single value. It’s a good alternative to a long chain of if-else if.
```
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no cases match
}
```
### Example:
```
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("It's a regular day.");
}
```

### 6. Logical Operators in Conditions
You can use logical operators (&&, ||, !) to combine or negate conditions.

### Example:
```
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You are allowed to enter.");
} else {
  console.log("Access denied.");
}
```

### 7. Truthy and Falsy Values
JavaScript conditions evaluate "truthy" and "falsy" values:

Falsy values: false, 0, "", null, undefined, NaN
Truthy values: Anything not falsy.

### Example:
```
let name = ""; // Empty string is falsy
if (name) {
  console.log("Name is provided.");
} else {
  console.log("Name is not provided.");
}
```

### 8. Optional Chaining with Conditions
Optional chaining (?.) can be used to safely access nested object properties in conditions.

### Example:
```
let user = { address: { city: "New York" } };
if (user?.address?.city === "New York") {
  console.log("User is in New York.");
}
```
## Key Takeaways:
 - Use if statements for simple conditions.
 - Use switch statements when testing a single value against multiple options.
 - Use the ternary operator for concise, single-condition checks.
 - Leverage logical operators and truthy/falsy evaluations for complex conditions.
