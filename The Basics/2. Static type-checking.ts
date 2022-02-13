// 2. Static type-checking

// Ideally, we could have a tool that helps us find these bugs before our code runs.
// That’s what a static type-checker like TypeScript does. Static types systems describe
// the shapes and behaviors of what our values will be when we run our programs.
// A type-checker like TypeScript uses that information and
// tells us when things might be going off the rails.

const message = "hello!";

message();
// This expression is not callable.
// Type 'String' has no call signatures.

// Running that last sample with TypeScript will give us an error message
// before we run the code in the first place.
