const { myFunction, tests } = require("./extract-keys-from-object-javascript");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(fixture)).toBe(result)
);
