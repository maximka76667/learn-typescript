// 3. Non-exception Failures

const account = {
  name: "Daniel",
  age: 26,
};
account.location; // returns undefined

// Ultimately, a static type system has to make the call over what code should be flagged
// as an error in its system, even if it’s “valid” JavaScript that won’t immediately throw an error.
// In TypeScript, the following code produces an error about location not being defined

const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// Property 'toLocalLowerCase' does not exist on type '"Hello World!"'.
// Did you mean 'toLocaleLowerCase'?

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
}

// Operator '<' cannot be applied to types '() => number' and 'number'.

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
