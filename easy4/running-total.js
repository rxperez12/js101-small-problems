function runningTotal(array) {
  let result = [];
  let sum = 0;
  for (const elem of array) {
    sum += elem;
    result.push(sum);
  }
  return result;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
