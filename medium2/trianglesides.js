/*
All 
*/
function validTriangle(array) {
  let greaterThanZero = array[0] > 0 && array[1] > 0 && array[2] > 0;
  let shortestSides = array[0] + array[1] > array[2];
  return greaterThanZero && shortestSides;
}

function triangle(num1, num2, num3) {
  let sideArray = [num1, num2, num3].sort((a, b) => a - b);
  if (!validTriangle(sideArray)) return "invalid";
  if (num1 === num2 && num1 === num3) return "equilateral";
  if (num1 === num2 || num1 === num3 || num2 === num3) return "isosceles";
  if (num1 !== num2 && num2 !== num3 && num1 !== num3) return "scalene";
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
