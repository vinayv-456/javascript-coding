const myFunction = () => {
  let obj1 = { a: 20, b: 30, c: 40 };
  let avgVal = Object.values(obj1).reduce((total, val) => {
    //console.log( total , val )
    return total + val;
  }, 0);
  let avg = avgVal / Object.keys(obj1).length;

  // for(let val of Object.keys(obj1))
  // {
  //     var sum2 = obj1[val] + avg
  //     console.log(val + " -> " + sum2)
  // }
  // return sum2

  for (let key in obj1) {
    obj1[key] += avg;
  }
  console.log(obj1);
  return obj1;
};

console.log(myFunction());
