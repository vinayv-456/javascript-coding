const {
  myFunction,
  tests,
} = require("./creating-objects-from-arrays-javascript");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(...fixture)).toStrictEqual(result)
);
