// TypeScript’s type system allows you to build new types out of
// existing ones using a large variety of operators.
// Now that we know how to write a few types, it’s time to start combining them in interesting ways.

// Defining a Union Type

// The first way to combine types you might see is a union type.
// A union type is a type formed from two or more other types,
// representing values that may be any one of those types.
// We refer to each of these types as the union’s members.

// Let’s write a function that can operate on strings or numbers:

function printFlat(flat: number | string) {
  console.log(`Your flat is ${flat}`);
}

printFlat(32);

printFlat("4A");

printFlat({
  ground: 2,
  id: 5,
});

// Argument of type '{ ground: number; id: number; }' is
// not assignable to parameter of type 'string | number'.
// Type '{ ground: number; id: number; }' is not assignable to type 'number'.

// Working with Union Types

// It’s easy to provide a value matching a union type - simply
// provide a type matching any of the union’s members.
// If you have a value of a union type, how do you work with it?

// TypeScript will only allow an operation if it is valid for every member of the union.
// For example, if you have the union string | number,
// you can’t use methods that are only available on string:

function useOnlyForString(stringLike: number | string) {
  return stringLike.toUpperCase();
  // Property 'toUpperCase' does not exist on type 'number'.
}

// The solution is to narrow the union with code, the same as you would in
// JavaScript without type annotations. Narrowing occurs when TypeScript can
// deduce a more specific type for a value based on the structure of the code.

// For example, TypeScript knows that only a string value will have a typeof value "string":

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id + 1);
  }
}

// Another example is to use a function like Array.isArray:
function createParty(people: string[] | string) {
  if (Array.isArray(people)) {
    console.log("Let's have a party!!!");
  } else {
    console.log("Party for one!!!");
  }
}

// Notice that in the else branch, we don’t need to do anything
// special - if x wasn’t a string[], then it must have been a string.

// Sometimes you’ll have a union where all the members have something in common.
// For example, both arrays and strings have a slice method. If every member in a union
// has a property in common, you can use that property without narrowing:

// Return type is inferred as number[] | string
function sliceFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
