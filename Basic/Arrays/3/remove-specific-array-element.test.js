const { myFunction, tests } = require("./remove-specific-array-element");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(fixture)).toBe(result)
);
