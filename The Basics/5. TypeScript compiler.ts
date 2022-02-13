// 5. TypeScript compiler

// We’ve been talking about type-checking, but we haven’t yet used our type-checker.
// Let’s get acquainted with our new friend tsc, the TypeScript compiler.
// First we’ll need to grab it via npm.

// [npm install -g typescript]

// This installs the TypeScript Compiler tsc globally.
// You can use npx or similar tools if you’d prefer to run tsc
// from a local node_modules package instead.

// Now let’s move to an empty folder and try writing our first TypeScript program: hello.ts:

// hello.ts
// Greets the world.
console.log("Hello world!");

// Notice there are no frills here; this “hello world” program looks identical to what
// you’d write for a “hello world” program in JavaScript.
// And now let’s type-check it by running the command tsc
// which was installed for us by the typescript package.

// $ tsc hello.ts

// In this case, there was very little for TypeScript to transform,
// so it looks identical to what we wrote. The compiler tries to emit clean readable code
// that looks like something a person would write.
// While that’s not always so easy, TypeScript indents consistently,
// is mindful of when our code spans across different lines of code,
// and tries to keep comments around.
