let arr1 = [10, 80, 40, 50];
let arr2 = [30, 80, 100, 50];
let arr3 = [];

arr1.forEach((ele, index) => {
  var val = arr1[index] + arr2[index];
  //console.log(arr3.push([index,ele]))
  //  return val
  arr3.push(val);
});
console.log(arr3);
//console.log(arr3[val].push())
