// Object types can also specify that some or all of their properties are optional.
// To do this, add a ? after the property name:

function printSurname(firstSurname: string, secondSurname?: string) {
  console.log(`Your surname is ${firstSurname} ${secondSurname}`);
}

// In JavaScript, if you access a property that doesn’t exist, you’ll get the value
// undefined rather than a runtime error. Because of this, when you read from an optional
// property, you’ll have to check for undefined before using it.

function printName(animal: { name: string; sound?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(animal.sound.toUpperCase());
  // Object is possibly 'undefined'.

  if (animal.sound !== undefined) {
    // OK
    console.log(animal.sound.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(animal.sound?.toUpperCase());
}
