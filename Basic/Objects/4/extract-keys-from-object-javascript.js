// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {
  let result = Object.keys(a);
  console.log(result);
  return result;
}

const tests = [
  [{ a: 1, b: 2, c: 3 }, ["a", "b", "c"]],
  [{ j: 9, i: 2, x: 3, z: 4 }, ["j", "i", "x", "z"]],
  [{ w: 15, x: 22, y: 13 }, ["w", "x", "y"]],
];

module.exports = {
  myFunction,
  tests,
};
