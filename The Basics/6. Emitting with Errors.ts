// 6. Emitting with Errors

// One thing you might not have noticed from the last example
// was that our hello.js file changed again.
// If we open that file up then we’ll see that the contents
// still basically look the same as our input file.
// That might be a bit surprising given the fact that tsc reported
// an error about our code, but this is based on one of TypeScript’s core values:
// much of the time, you will know better than TypeScript.

// So TypeScript doesn’t get in your way.
// Of course, over time, you may want to be a bit more defensive against mistakes,
// and make TypeScript act a bit more strictly.
// In that case, you can use the noEmitOnError compiler option.
// Try changing your hello.ts file and running tsc with that flag:

// $ tsc --noEmitOnError hello.ts
