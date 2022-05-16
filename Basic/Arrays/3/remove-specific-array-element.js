// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction(a, b) {
  // filter
  var i = 0;
  let a_dup = [...a];
  while (i < a_dup.length) {
    if (a_dup[i] === b) {
      a_dup = a_dup.splice(i, 1);
    } else {
      ++i;
    }
  }
  console.log(a_dup);
  return a_dup;
}

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
