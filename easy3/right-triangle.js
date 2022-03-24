function triangle(number) {
  let result = "";
  for (i = 1; i <= number; i++) {
    result += `${" ".repeat(number - i)}${"*".repeat(i)}\n`;
  }
  return result;
}

console.log(triangle(5));
console.log(triangle(9));
