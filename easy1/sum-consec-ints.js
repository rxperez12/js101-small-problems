const readline = require("readline-sync");

function invalidNumber(number) {
  return (
    number.trim() === "" || Number.isNaN(Number(number)) || Number(number) < 1
  );
}
function invalidLetter(letter) {
  return !["s", "p"].includes(letter);
}

let int = readline.question("Please enter an interger greater than 0: ");

while (invalidNumber(int)) {
  int = readline.question(`${int} is not a valid entry. Please try again. `);
}

let sumOrProduct = readline.question(
  `Enter "s" to compute the sum, or "p" to compute the product. `
);

while (invalidLetter(sumOrProduct)) {
  sumOrProduct = readline.question(
    `${sumOrProduct} is not a valid entry. Please try again. `
  );
}

if (sumOrProduct === "s") {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    sum += i;
  }
  console.log(sum);
}

if (sumOrProduct === "p") {
  let product = 1;
  for (let i = 1; i <= int; i++) {
    product *= i;
  }
  console.log(product);
}
