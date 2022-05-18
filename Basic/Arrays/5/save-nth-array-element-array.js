const myFunction = (a, n) => {
  //   let a = [1,2,3,4,5,6,77,8,9,10]
  //   let n =2
  let arr = [];

  //      5    10      1+5
  for (i = n; i <= a.length; i = i + n) {
    arr.push(a[i - 1]);
  }

  return arr;
};
const res = myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5);
console.log(res);
