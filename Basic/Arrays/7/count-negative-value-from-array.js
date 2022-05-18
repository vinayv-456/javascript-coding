const myFunction = (arr) => {
  //let arr = [1,-2,2,-4]

  let filterArr = arr.filter((num) => num < 0).length;

  return filterArr;
};

const res = myFunction([4, -3, 2, 1, 0]);
console.log(res);
