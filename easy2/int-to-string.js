function integerToString(number) {
  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let currentNumber = number;
  let result = "";
  if (currentNumber === 0) return NUMBERS[0];
  while (currentNumber > 0) {
    let remainder = currentNumber % 10;
    result = NUMBERS[remainder] + result;
    currentNumber = Math.floor(currentNumber / 10);
  }
  return result;
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"

function signedIntegerToString(number) {
  if (number < 0) {
    return `-${integerToString(Math.abs(number))}`;
  } else if (number > 0) {
    return `+${integerToString(number)}`;
  } else {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
