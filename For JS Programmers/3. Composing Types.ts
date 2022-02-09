// 3. Composing Types

// With TypeScript, you can create complex types by combining simple ones.
// There are two popular ways to do so: with unions, and with generics.

// a. Unions
// With a union, you can declare that a type could be one of many types.

type MyBool = true | false;
// Note: If you hover over MyBool above, you’ll see that it is classed as boolean.

// A popular use-case for union types is to describe the set of string or
// number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type UserPermissions = "user" | "admin" | "guest";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too.
// For example, you may have a function that takes an array or a string

function getLength(obj: string | string[]) {
  return obj.length;
}

// To learn the type of a variable, use typeof:

//      Type                  Predicate
//      string                typeof s === "string"
//      number                typeof n === "number"
//      boolean               typeof b === "boolean"
//      undefined             typeof undefined === "undefined"
//      function              typeof f === "function"
//      array                 Array.isArray(a)

// For example, you can make a function return different values
// depending on whether it is passed a string or an array:

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }

  return obj;
}

// b. Generics

// Generics provide variables to types. A common example is an array.
// An array without generics could contain anything.
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can declare your own types that use generics:

interface Notes<Note> {
  add: (obj: Note) => void;
  get: () => Note;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const notes: Notes<number>;

const object = notes.get();

notes.add(3);
notes.add("3"); // Error: type mismatch since the notes is a number
