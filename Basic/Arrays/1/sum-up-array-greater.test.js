const { myFunction, tests } = require("./sum-up-array-greater");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(fixture)).toBe(result)
);
