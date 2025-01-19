'use strict';

const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n

console.log(Number.MAX_SAFE_INTEGER);

const bigint = 123123131231231232131212n;

const saneBigint = BigInt(123123131231231232131212);

console.log(typeof(bigint));

console.log(5n / 2n); // 2n

console.log(2n == 2); // true