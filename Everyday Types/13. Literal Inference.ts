// Literal Inference

// When you initialize a variable with an object,
// TypeScript assumes that the properties of that object
// might change values later.
// For example, if you wrote code like this:

const obj = { counter: 0 };
if (someCondition) {
    obj.counter = 1;
}

// TypeScript doesn’t assume the assignment of 1 to a
// field which previously had 0 is an error.
// Another way of saying this is that obj.counter
// must have the type number, not 0, because types
// are used to determine both reading and writing behavior.

// The same applies to strings:

function handleRequest(url: string, method: "GET" | "POST") {
    // ...
}

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// In the above example req.method is inferred to be string,
// not "GET". Because code can be evaluated between the
// creation of req and the call of handleRequest which could
// assign a new string like "GUESS" to req.method, TypeScript considers this code to have an error.

// There are two ways to work around this.

// 1. You can change the inference by adding a type assertion in either location:

// Change 1:
const req2 = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req2.url, req2.method as "GET");

// Change 1 means “I intend for req.method to always have
// the literal type "GET"”, preventing the possible
// assignment of "GUESS" to that field after.
// Change 2 means “I know for other reasons that req.method has the value "GET"“.

// 2. You can use as const to convert the entire object to be type literals:
const req3 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req3.url, req3.method);

// The as const suffix acts like const but for the type system,
// ensuring that all properties are assigned the literal type
// instead of a more general version like string or number.
