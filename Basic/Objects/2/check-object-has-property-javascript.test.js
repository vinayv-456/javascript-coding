const { myFunction, tests } = require("./check-object-has-property-javascript");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(fixture)).toBe(result)
);
