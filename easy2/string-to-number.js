/* eslint-disable max-lines-per-function */
function stringToInteger(string) {
  let number = 0;
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let i = 0;
  while (i < string.length) {
    let currentNumber = string[string.length - 1 - i];
    number += DIGITS[currentNumber] * Math.pow(10, i);
    i++;
  }
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
