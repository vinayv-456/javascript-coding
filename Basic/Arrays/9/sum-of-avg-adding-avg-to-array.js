const myFunction = () => {
  let arr1 = [10, 40, 20, 30];
  let sumVal = arr1.reduce((total, val) => {
    //console.log( total , val )
    return total + val;
  }, 0);
  let avg = sumVal / arr1.length;

  // arr1.forEach(function (item, index) {
  //     let newSum = item + avg
  //     arr1[index] = newSum;
  //     console.log( newSum);
  // });

  // const newArr = arr1.map(item=>item+avg)
  // console.log(newArr);
  // console.log(arr1)
  console.log(arr1);
  let filterVal = arr1.filter((num) => num >= avg);
  // [40,20]

  return filterVal;
};

console.log(myFunction());
