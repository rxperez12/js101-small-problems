/*
Rules: Iterating through the number, take the digit at current index and rotate it to the end of the number. Keep all numbers coming before, constant.

Input:
Number to be rotated
Output:
Maximum rotated number

Examples:
Rotating a digit of length 1, returns the same number.
Leading zeros get dropped. Should happen naturally using Number();

Data Structures:
Convert the number into a string to allow us to iterate over it.

Algorithm:
Convert number parameter to string, allowing us to loop over the each number, and declaring and saving it as a variable.
Using our helper array function, take each number and rotate it to the right of the number.
Saving this value into a variable outside of the loop in order to use it again in the next iteration.
Convert number string into number and return it.
*/

function rotateRightmostDigits(number, indexFromRight) {
  let numberArr = String(number).split("");
  let idx = numberArr.length - indexFromRight;
  let valueToRotate = numberArr.splice(idx, 1);
  return Number(numberArr.concat(valueToRotate).join(""));
}
function maxRotation(number) {
  let numString = String(number);
  for (let i = numString.length; i >= 2; i--) {
    numString = String(rotateRightmostDigits(Number(numString), i));
  }
  return Number(numString);
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
