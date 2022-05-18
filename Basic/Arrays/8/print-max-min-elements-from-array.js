const myFunction = () => {
  let arr1 = [10, 13, 25, 30, 40];
  let min = 11;
  let max = 31;

  let filterArr = arr1.filter((num) => num >= min && num <= max);
  console.log(filterArr);
  return filterArr;
};

myFunction();
