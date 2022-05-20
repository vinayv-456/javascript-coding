const { myFunction, tests } = require("./merge-objects-same-key");
test.each(tests)("passes for %j with result %j", (fixture, result) =>
  expect(myFunction(...fixture)).toStrictEqual(result)
);
