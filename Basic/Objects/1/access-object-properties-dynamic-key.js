// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunction(obj, key) {
  return;
}

const tests = [
  [{ continent: "Asia", country: "Japan" }, "continent", "Asia"],
  [{ country: "Sweden", continent: "Europe" }, "country", "Sweden"],
];

module.exports = {
  myFunction,
  tests,
};
