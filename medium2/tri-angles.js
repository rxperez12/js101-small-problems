function isValidTriangle(arraySides) {
  let angleSum = arraySides.reduce((a, b) => a + b, 0) === 180;
  let greaterThanZero = arraySides.every((elem) => elem > 0);
  return angleSum && greaterThanZero;
}

function triangle(num1, num2, num3) {
  let angleArray = [num1, num2, num3];
  if (!isValidTriangle(angleArray)) return "invalid";
  if (angleArray.includes(90)) return "right";
  let anglesLessThan90 = angleArray.every((elem) => elem < 90);
  if (anglesLessThan90) return "acute";
  return "obtuse";
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
