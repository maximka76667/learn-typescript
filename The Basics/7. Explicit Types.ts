// 7. Explicit Types

// Up until now, we haven’t told TypeScript what person or date are.
// Let’s edit the code to tell TypeScript that person is a string,
// and that date should be a Date object.
// We’ll also use the toDateString() method on date.

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Steve", Date());
greet("Maddison", new Date());
