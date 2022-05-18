const myFunction = () => {
  let val = ["test", "Test"];
  //let firstArr = val[0]
  //console.log(firstArr)

  //let result = val.filter((num) => num===firstArr)
  //   val.forEach((index,ele) =>{
  //       //console.log(val[index])
  //       if(firstArr != val[index])
  //             return false
  //     })

  const isSame = val.find((e) => e === val[0]);
  return isSame;
};

const res = myFunction();
console.log(res);
