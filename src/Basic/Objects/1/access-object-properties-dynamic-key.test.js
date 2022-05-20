const { myFunction, tests } = require("./access-object-properties-dynamic-key");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(...fixture)).toBe(result)
);
