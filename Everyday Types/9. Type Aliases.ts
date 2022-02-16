// We’ve been using object types and union types by writing them directly in type annotations.
// This is convenient, but it’s common to want to use the same type more
// than once and refer to it by a single name.

type Car = {
  model: string,
  wheels: number;
}

function printCar(car: Car) {
  console.log(`Model: ${car.model}`);
}

printCar({ model: "Ferrari", wheels: 8 });

// You can actually use a type alias to give a name to any type at all,
// not just an object type. For example, a type alias can name a union type:

type FlatId = string | number;

// Note that aliases are only aliases - you cannot use type aliases to create
// different/distinct “versions” of the same type. When you use the alias,
// it’s exactly as if you had written the aliased type. In other words,
// this code might look illegal, but is OK according to TypeScript
// because both types are aliases for the same type:

type UserInputSanitizedString = string;

function normalizeInput(str: string): UserInputSanitizedString {
  return str.normalize();
}

// Create a sanitized input
let userInput = normalizeInput("Hello, Maxim");

// Can still be re-assigned with a string though
userInput = "new input";
