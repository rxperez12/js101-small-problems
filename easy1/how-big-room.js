let rLSync = require("readline-sync");
let side1 = Number(
  rLSync.question("Enter the length of the room in meters:\n")
);
let side2 = Number(rLSync.question("Enter the width of the room in meters:\n"));

const SQMETER_TO_SQFEET = 10.7639;
let areaMeters = side1 * side2;
let areaFeet = areaMeters * SQMETER_TO_SQFEET;
console.log(
  `The area of the room is ${areaMeters.toFixed(
    2
  )} square meters (${areaFeet.toFixed(2)} square feet).`
);
