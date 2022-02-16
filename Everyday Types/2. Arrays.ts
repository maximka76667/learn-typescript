// To specify the type of an array like [1, 2, 3], you can use the syntax number[];
// this syntax works for any type (e.g. string[] is an array of strings, and so on).
// You may also see this written as Array<number>, which means the same thing.
// We’ll learn more about the syntax T<U> when we cover generics.

const countries: string[] = ["Spain", "Russia", "USA"];

const myFavouriteNumbers: Array<number> = [1, 3, 7];

const arrayOfArrays: Array<Array<number>> = [[3], [1, 4]];

// Note that [number] is a different thing; refer to the section on Tuples.

const tuple: [number, number] = [5, 6];
const tupleWithString: [number, number] = ["hello", 3]; // Error
