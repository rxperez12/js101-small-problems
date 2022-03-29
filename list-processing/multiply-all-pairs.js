function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (const elem of arr1) {
    for (const num of arr2) {
      result.push(num * elem);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
