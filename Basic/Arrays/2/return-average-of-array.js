// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  //let arr = [10,100,40]
  let totalnum = arr.reduce((total, val) => {
    return total + val;
  }, 0);
  //console.log("avg of array : " + avg);
  return totalnum / arr.length;
}

const tests = [
  [[10, 100, 40], 50],
  [[10, 100, 1000], 370],
  [[-50, 0, 50, 200], 50],
];

module.exports = { myFunction, tests };
