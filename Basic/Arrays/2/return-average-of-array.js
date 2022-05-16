// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  //let arr = [10,100,40]
  let sum = 0;
  let avg = 0;
  for (let i in arr) {
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  console.log("avg of array : " + avg);
  return avg;
}

const tests = [
  [[10, 100, 40], 50],
  [[10, 100, 1000], 370],
  [[-50, 0, 50, 200], 50],
];

module.exports = { myFunction, tests };
