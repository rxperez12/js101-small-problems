/*
Problem:
Take the digit with the index of the second parameter from the first parameter, counting from the right and move it to the end of the number.

Input:
the original number, the index statrting from the right of number to rotate
Result:
the rotated number

Data Structures
Convert number into an array in order to index and manipulate more easily.

Steps:
Change the first paramater number into an array.
Use the second parameter to choose the correct index starting from the right.
Take the selected number, and remove it from the array, saving this into a variable.
Recombine resulting array, covert it back into a number and return the answer.
*/

function rotateRightmostDigits(number, indexFromRight) {
  let numberArr = String(number).split("");
  let idx = numberArr.length - indexFromRight;
  let valueToRotate = numberArr.splice(idx, 1);
  return Number(numberArr.concat(valueToRotate).join(""));
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
