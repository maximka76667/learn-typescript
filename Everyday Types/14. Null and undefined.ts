// null and undefined

// JavaScript has two primitive values used
// to signal absent or uninitialized value: null and undefined.

// TypeScript has two corresponding types by the same names.
// How these types behave depends on whether you have the strictNullChecks option on.

// strictNullChecks off

// With strictNullChecks off, values that might be null
// or undefined can still be accessed normally, and the
// values null and undefined can be assigned to a property
// of any type.
// This is similar to how languages without null
// checks (e.g. C#, Java) behave.
// The lack of checking for these values tends to
// be a major source of bugs; we always recommend
// people turn strictNullChecks on if it’s practical
// to do so in their codebase.

// strictNullChecks on

// With strictNullChecks on, when a value is null or
// undefined, you will need to test for those values
// before using methods or properties on that value.
// Just like checking for undefined before using an optional
// property, we can use narrowing to check for values that
// might be null:

function doSomething(x: string | null) {
  console.log(`Hello, ${x.toUpperCase()}`);
  // El objeto es posiblemente "null".
}

function doSomethingFixed(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log(`Hello, ${x.toUpperCase()}`);
  }
}

// Non-null Assertion Operator (Postfix !)

// TypeScript also has a special syntax for removing
// null and undefined from a type without doing any
// explicit checking.
// Writing ! after any expression is effectively a type
// assertion that the value isn’t null or undefined:

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

liveDangerously(10);
liveDangerously(null); // Error in JS runtime
liveDangerously(undefined); // Error in JS runtime

// Just like other type assertions, this doesn’t change
// the runtime behavior of your code, so it’s important
// to only use ! when you know that the value can’t be null or undefined.
