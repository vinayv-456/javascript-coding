const { myFunction, tests } = require("./add-property-array-of-objects");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(...fixture)).toStrictEqual(result)
);
