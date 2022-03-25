function countOccurrences(array) {
  let result = {};
  for (const elem of array) {
    result[elem] = result[elem] || 0;
    result[elem] += 1;
  }
  printObject(result);
}

function printObject(obj) {
  for (const key in obj) {
    console.log(`(${key}) => ${obj[key]}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// (car) => 4;
// (truck) => 3;
// (SUV) => 1;
// (motorcycle) => 2;
