const readline = require("readline-sync");

function getNInts(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    let int = readline.question(`Enter the ${i + returnOrdinal(i)} number: `);
    result.push(int);
  }
  return result;
}

function returnOrdinal(number) {
  switch (number) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

let numArray = getNInts(5);
let lastNum = readline.question("Enter the last number: ");

if (numArray.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numArray.join(",")}.`);
} else {
  console.log(
    `The number ${lastNum} does not appear in ${numArray.join(",")}.`
  );
}
