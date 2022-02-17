// In addition to the general types string and number,
// we can refer to specific strings and numbers in type positions.

const five = 5;

let changingString = "Hello World";
changingString = "Olá Mundo";
// let changingString: string

// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system

const constantString = "Hello World";

// Because `constantString` can only represent 1 possible string, it
// has a literal type representation

constantString;
// const constantString: "Hello World"

// By themselves, literal types aren’t very valuable:

let ten: 10;

ten = 10;

ten = 5;

// It’s not much use to have a variable that can only have one value!

// But by combining literals into unions,
// you can express a much more useful concept - for example,
// functions that only accept a certain set of known values:

function changeWindowState(state: "open" | "closed" | "half-open") {
    window.setState(state);
}

changeWindowState("closed");

changeWindowState("off");

// Numeric literal types work the same way:

function printOddUntilTen(number: 1 | 3 | 5 | 7 | 9) {
    console.log(number);
}
printOddUntilTen(5);
printOddUntilTen(4);

interface Options {
    width: number;
}

function configure(x: Options | "auto") {
    // ...
}

configure({ width: 10 });
configure("auto");
configure(5);

// There’s one more kind of literal type: boolean literals.
// There are only two boolean literal types,
// and as you might guess, they are the types true and false.
// The type boolean itself is actually just an alias for the union true | false.
