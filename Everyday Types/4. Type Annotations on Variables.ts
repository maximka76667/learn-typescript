// When you declare a variable using const, var, or let, you can optionally add a type
// annotation to explicitly specify the type of the variable:

const myName: string = "Alice";
// Try

// TypeScript doesn’t use “types on the left”-style declarations like int x = 0;
// Type annotations will always go after the thing being typed.

// In most cases, though, this isn’t needed.
// Wherever possible, TypeScript tries to automatically infer the
// types in your code. For example, the type of a variable is inferred
// based on the type of its initializer:

// No type annotation needed -- 'myName' inferred as type 'string'
const myNameWithoutType = "Alice";
// Try

// For the most part you don’t need to explicitly learn the rules
// of inference. If you’re starting out, try using fewer type annotations
// than you think - you might be surprised how few you need for TypeScript
// to fully understand what’s going on.
