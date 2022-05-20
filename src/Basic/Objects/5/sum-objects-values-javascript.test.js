const { myFunction, tests } = require("./sum-objects-values-javascript");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(...fixture)).toBe(result)
);
