// Non-null Assertion Operator (Postfix !)

// TypeScript also has a special syntax for removing null and undefined from a type without doing
// any explicit checking. Writing ! after any expression is effectively a type assertion that
// the value isn’t null or undefined:

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
