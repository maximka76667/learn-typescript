function liveDangerouslyTest(x) {
  // No error
  console.log(x.toFixed());
}

liveDangerouslyTest(10);
liveDangerouslyTest(null);
liveDangerouslyTest(undefined);
