# BigInt is a built-in JavaScript 
## data type introduced in ES2020 to represent integers that are arbitrarily large. Unlike the Number type, which can only safely represent integers between -2^53 + 1 and 2^53 - 1 (the "safe integer range"), BigInt allows you to work with numbers beyond these limits.

## Creating a BigInt

### Using the BigInt Constructor
Pass an integer or a string to the BigInt constructor.
```
const bigInt1 = BigInt(123456789012345678901234567890);
console.log(bigInt1); // 123456789012345678901234567890n
```

### Using the n Suffix
Append the n suffix to an integer literal.
```
const bigInt2 = 123456789012345678901234567890n;
console.log(bigInt2); // 123456789012345678901234567890n
```

## Operations with BigInt

### Arithmetic Operations
You can perform basic arithmetic (+, -, *, /, %, **) with BigInt.
```
const a = 100n;
const b = 20n;

console.log(a + b); // 120n
console.log(a - b); // 80n
console.log(a * b); // 2000n
console.log(a / b); // 5n (division truncates decimals)
console.log(a % b); // 0n
console.log(a ** 2n); // 10000n
```

### Comparison
You can compare BigInt values using comparison operators (<, <=, >, >=, ==, ===).
```
console.log(10n > 5n); // true
console.log(10n === 10); // false (different types)
console.log(10n == 10); // true (type coercion)
```

### Mixing BigInt and Number
You cannot directly mix BigInt and Number in arithmetic operations. You must convert one type to the other.
```
const bigInt = 100n;
const num = 50;

// Throws TypeError
// console.log(bigInt + num);

// Convert Number to BigInt
console.log(bigInt + BigInt(num)); // 150n

// Convert BigInt to Number
console.log(Number(bigInt) + num); // 150
```

## Special Notes About BigInt
### BigInt Is Immutable
Like Number, BigInt values are immutable.

### Division Truncates Decimals
When dividing two BigInt values, the result is truncated (no decimals).
```
console.log(10n / 3n); // 3n
```

### Cannot Use with Math Functions
The Math object does not support BigInt.
```
const bigInt = 100n;
// console.log(Math.sqrt(bigInt)); // TypeError
```

### Cannot Use with Floating-Point Numbers
BigInt cannot represent fractional or decimal numbers.

## BigInt and JSON
BigInt cannot be directly serialized to JSON because JSON does not support BigInt.
```
const bigInt = 12345678901234567890n;

// Throws TypeError
// JSON.stringify(bigInt);

// Workaround: Convert to string
console.log(JSON.stringify(bigInt.toString())); // "12345678901234567890"
```

## Use Cases for BigInt
 - Cryptography
Working with very large prime numbers for encryption algorithms like RSA.

 - High-Precision Calculations
Financial calculations, scientific simulations, or cases requiring precision beyond 53 bits.

 - Working with Large IDs
Systems that use large numeric IDs, such as database identifiers, can benefit from BigInt.

## Limitations of BigInt
 - Performance
BigInt operations are slower than Number operations because of their arbitrary precision.

 - No Compatibility with Math Functions
You cannot use Math methods like Math.sqrt or Math.pow with BigInt.

 - No Decimals
BigInt only works with integers, so it's unsuitable for use cases requiring floating-point precision.

### Example: Practical Use of BigInt
```
// Factorial with BigInt
function factorial(n) {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(20n));
// Output: 2432902008176640000n
```
Let me know if you’d like further examples or explanations!
