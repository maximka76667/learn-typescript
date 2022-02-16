// An interface declaration is another way to name an object type:
interface CarInterface {
  model: string,
  wheels: number,
}

function printCar(car: CarInterface) {
  console.log(`Model: ${car.model}`);
}

printCar({ model: "Ferrari", wheels: 8 });

// Just like when we used a type alias above, the example works just as
// if we had used an anonymous object type. TypeScript is only concerned
// with the structure of the value we passed to printCoord - it only cares
// that it has the expected properties. Being concerned only with the structure
// and capabilities of types is why we call TypeScript a structurally typed type system.

// Differences Between Type Aliases and Interfaces

// Type aliases and interfaces are very similar, and in many cases
// you can choose between them freely.
// Almost all features of an interface are available in type, the key distinction is
// that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// Interface
// Extending an interface
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: "Teddy",
  honey: true,
};

console.log(bear.name);
console.log(bear.honey);

// Types Aliases
// Extending a type via intersections
type Food = {
  name: string
}

type Apple = Food & {
  sweet: boolean
}

const apple = {
  name: "Fred",
  sweet: true,
};

console.log(apple.name);
console.log(apple.sweet);

// Adding new fields to an existing interface
interface Bank {
  id: number;
}

interface Bank {
  name: string;
}

const bank: Bank = { id: 5, name: "National" };

// A type cannot be changed after being created

type Window = {
  mark: string
}

type Window = {
  opened: boolean
}

// Error: Duplicate identifier 'Window'.
