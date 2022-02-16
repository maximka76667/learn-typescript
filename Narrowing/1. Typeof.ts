function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      // Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

// typeof null is actually "object"

// Users with enough experience might not be surprised,
// but not everyone has run into this in JavaScript;
// luckily, TypeScript lets us know that strs was only
// narrowed down to string[] | null instead of just string[].
