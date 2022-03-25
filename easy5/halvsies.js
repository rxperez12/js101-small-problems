function halvsies(array) {
  let halfIndex = Math.round(array.length / 2);
  let result = [array.slice(0, halfIndex), array.slice(halfIndex)];
  return result;
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
