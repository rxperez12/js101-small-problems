function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 3) === 15); // logs true

function square(num) {
  return multiply(num, num);
}
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
