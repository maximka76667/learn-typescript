// 4. Structural Type System

// One of TypeScript’s core principles is that type checking focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural typing”.

// In a structural type system, if two objects have the same shape,
// they are considered to be of the same type.

interface Point {
    x: number;
    y: number;
}

function logPoint(point: Point) {
  console.log(`${point.x}, ${point.y}`);
}

const point = { x: 30, y: 40 };

logPoint(point);

// The point variable is never declared to be a Point type.
// However, TypeScript compares the shape of point to the shape of Point in the type-check.
// They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

const pointWithZ = { x: 20, y: 5, z: 10 };
logPoint(pointWithZ);

const rectangle = {
  x: 10, y: 10, width: 5, height: 3,
};
logPoint(rectangle);

const color = { hex: "#128A53" };
logPoint(color);

// There is no difference between how classes and objects conform to shapes:
class VirtualPoint {
  x:number;

  y:number;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}

const VPoint = new VirtualPoint(10, 2);
logPoint(VPoint);

// If the object or class has all the required properties, TypeScript will say they match,
// regardless of the implementation details.
