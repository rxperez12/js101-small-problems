const readline = require("readline-sync");

function prompt(string) {
  return `==> ${string}`;
}

let num1 = readline.question(prompt("Enter the first number: \n"));
let num2 = readline.question(prompt("Enter the second number: \n"));

console.log(prompt(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`));
console.log(prompt(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`));
console.log(prompt(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`));
console.log(
  prompt(`${num1} / ${num2} = ${Math.floor(Number(num1) / Number(num2))}`)
);
console.log(prompt(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`));
console.log(prompt(`${num1} ** ${num2} = ${Number(num1) ** Number(num2)}`));
