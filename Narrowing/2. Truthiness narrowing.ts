// In JavaScript, we can use any expression in conditionals,
// &&s, ||s, if statements, Boolean negations (!), and more.
// As an example, if statements don’t expect their condition
// to always have the type boolean.

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    strs.forEach((str) => console.log(str));
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// One last word on narrowing by truthiness is that Boolean
// negations with ! filter out from negated branches.

function multiplyAll(
  values: number[] | undefined,
  factor: number,
): number[] | undefined {
  if (!values) {
    return values;
  }
  return values.map((x) => x * factor);
}
