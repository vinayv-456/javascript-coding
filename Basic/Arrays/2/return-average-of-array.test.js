const { myFunction, tests } = require("./return-average-of-array");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(fixture)).toBe(result)
);
