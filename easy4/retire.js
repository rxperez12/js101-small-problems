const readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retirementAge = readline.question("At what age would you like to retire? ");
let year = new Date().getFullYear();

console.log(
  `It's ${year}. You will retire in ${
    retirementAge - age + year
  }.\nYou only have ${retirementAge - age} years of work to go!`
);
