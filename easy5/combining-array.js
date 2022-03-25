function noDupes(result, array) {
  for (const elem of array) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
}

function union(array1, array2) {
  let result = [];
  noDupes(result, array1);
  noDupes(result, array2);
  return result;
}
console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
