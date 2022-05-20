const {
  myFunction,
  tests,
} = require("./multiply-all-objects-values-javascript");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(...fixture)).toStrictEqual(result)
);
