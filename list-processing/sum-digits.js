function sum(number) {
  let sum = 0;
  String(number)
    .split("")
    .forEach((str) => {
      sum += Number(str);
    });
  return sum;
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
