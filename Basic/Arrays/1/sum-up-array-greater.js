// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  // use reduce
  const arr1 = a.reduce((total, val) => {
    if (val > b) {
      return total + val;
    }
    return total;
  }, 0);
  console.log("sum of all array value greater than b : " + arr1);
  return arr1;
}

const tests = [
  [[[1, 2, 3, 4, 5, 6, 7], 2], 25],
  [[[-10, -11, -3, 1, -4], -3], 1],
  [[[78, 99, 100, 101, 401], 99], 602],
];

module.exports = {
  myFunction,
  tests,
};
