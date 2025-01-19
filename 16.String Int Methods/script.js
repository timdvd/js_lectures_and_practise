/*
    There are three types of quotation marks. 
    Strings using backticks can span multiple lines in the code and include expressions ${…}.
    Strings in JavaScript are encoded in UTF-16.
    There are special characters, such as a line break \n.
    To get a character, use [] or the at method.
    To extract a substring, use slice or substring.
    To convert a string to lowercase or uppercase, use toLowerCase/toUpperCase.
    To search for a substring, use indexOf or includes/startsWith/endsWith when you only need to check for the presence of a match.
    To compare strings according to language-specific rules, use localeCompare.

    Strings also have some other useful methods:

    str.trim() — removes spaces at the beginning and end of the string.
    str.repeat(n) — repeats the string n times.
*/

/*
    To write numbers with a large number of zeros:

    Use the shorthand notation with "e", specifying the number of zeros. For example, 123e6 represents 123 followed by 6 zeros: 123000000.
    A negative number after "e" divides the number by 1 followed by the specified number of zeros. For example, 123e-6 equals 0.000123 (123 millionths).
    For other numeral systems:
    Numbers can be directly written in hexadecimal (0x), octal (0o), and binary (0b) systems.
    parseInt(str, base) converts a string to an integer according to the specified numeral system: 2 ≤ base ≤ 36.
    num.toString(base) represents a number as a string in the specified numeral system base.
    To check for NaN and Infinity:
    isNaN(value) converts the argument to a number and checks if it is NaN.
    Number.isNaN(value) checks if the argument is a number and, if so, whether it is NaN.
    isFinite(value) converts the argument to a number and checks that it is not NaN, Infinity, or -Infinity.
    Number.isFinite(value) checks if the argument is a number and, if so, whether it is finite.
    To convert values like 12pt or 100px to a number:
    Use parseInt/parseFloat for a "soft" conversion of a string to a number. These functions read the number from the string until they encounter an error.
    For fractions:
    Use rounding methods such as Math.floor, Math.ceil, Math.trunc, Math.round, or num.toFixed(precision).
    Remember that working with fractions can result in a loss of precision.
    Additional mathematical functions:
    Refer to the documentation for the Math object. While small, this library includes all essential functions.
*/

let str = 'Lorem ipsum dolor emet';

console.log(str.toLocaleLowerCase());
console.log(str.indexOf('dolor'));

console.log(str.slice(5, 10)); // (start, end)
console.log(str.slice(6));

console.log(str.substring(6, 7)); // (start, length)