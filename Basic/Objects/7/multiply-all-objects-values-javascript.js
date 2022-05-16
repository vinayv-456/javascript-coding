// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b) {
  let sum;
  const finalObj = {};
  for (let val in a) {
    finalObj[val] = a[val] * b;
    console.log(val, finalObj[val]);
  }
  return finalObj;
}
const tests = [
  [[{ a: 1, b: 2, c: 3 }, 3], { a: 3, b: 6, c: 9 }],
  [[{ j: 9, i: 2, x: 3, z: 4 }, 10], { j: 90, i: 20, x: 30, z: 40 }],
  [[{ w: 15, x: 22, y: 13 }, 6], { w: 90, x: 132, y: 78 }],
];

module.exports = { myFunction, tests };
