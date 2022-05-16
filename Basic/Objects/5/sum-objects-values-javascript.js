// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
  let result = Object.values;
  let sum = 0;
  for (let key in a) {
    sum += a[key];
  }
  console.log(sum);
  return sum;
}

const tests = [
  [[{ a: 1, b: 2, c: 3 }], 6],
  [[{ j: 9, i: 2, x: 3, z: 4 }], 18],
  [[{ w: 15, x: 22, y: 13 }], 50],
];

module.exports = {
  myFunction,
  tests,
};
