const myFunction = (min, max) => {
  // let min = 2
  // let max = 10
  let arr1 = [];

  for (var i = min; i <= max; i++) {
    //console.log(i)
    arr1.push(i);
  }
  return arr1;
};

const res = myFunction(2, 7);
console.log(res);
