const { myFunction, tests } = require("./split-number-into-digits");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(fixture)).toStrictEqual(result)
);
