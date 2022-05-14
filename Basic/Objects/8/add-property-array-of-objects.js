// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
function myFunction(arr, str) {
  return;
}
const tests = [
  [
    [
      [
        { city: "Tokyo", country: "Japan" },
        { city: "Bangkok", country: "Thailand" },
      ],
      "Asia",
    ],
    [
      { city: "Tokyo", country: "Japan", continent: "Asia" },
      { city: "Bangkok", country: "Thailand", continent: "Asia" },
    ],
  ],
  [
    [
      [
        { city: "Stockholm", country: "Sweden" },
        { city: "Paris", country: "France" },
      ],
      "Europe",
    ],
    [
      { city: "Stockholm", country: "Sweden", continent: "Europe" },
      { city: "Paris", country: "France", continent: "Europe" },
    ],
  ],
];

module.exports = {
  myFunction,
  tests,
};
