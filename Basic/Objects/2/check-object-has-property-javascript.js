// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction(a, b) {
  return;
}

const tests = [
  [{ a: 1, b: 2, c: 3 }, "b", true],
  [{ x: "a", y: "b", z: "c" }, "a", false],
  [{ x: "a", y: "b", z: "c" }, "z", true],
];

module.exports = {
  myFunction,
  tests,
};
