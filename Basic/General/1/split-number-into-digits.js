// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  // map
  let stringarr = a.toString();
  let splitarr = stringarr.split("");
  let stringarr1 = splitarr.map(Number);
  console.log(stringarr1);
  return stringarr1;
}

const tests = [
  [10, [1, 0]],
  [931, [9, 3, 1]],
  [193278, [1, 9, 3, 2, 7, 8]],
];

module.exports = {
  myFunction,
  tests,
};
