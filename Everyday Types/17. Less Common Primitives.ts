// It’s worth mentioning the rest of the primitives in JavaScript which
// are represented in the type system. Though we will not go into depth here.

// bigint
// From ES2020 onwards, there is a primitive in JavaScript used for very large integers, BigInt:

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

// You can learn more about BigInt in the TypeScript 3.2 release notes
// (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint).

// symbol
// There is a primitive in JavaScript used to create a globally unique reference
// via the function Symbol():

const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // This condition will always return 'false' since
  // the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // ...
}
