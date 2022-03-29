function buyFruit(array) {
  let result = [];
  for (const elem of array) {
    for (let i = 0; i < elem[1]; i++) {
      result.push(elem[0]);
    }
  }
  return result;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
