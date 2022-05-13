// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction(a, b) {}

const tests = [
  [
    [[1, 2, 3], 2],
    [1, 3],
  ],
  [
    [[1, 2, "2"], "2"],
    [1, 2],
  ],
  [
    [[false, "2", 1], false],
    ["2", 1],
  ],
  [
    [[1, 2, "2", 1], 1],
    [2, "2"],
  ],
];

module.exports = {
  myFunction,
  tests,
};
