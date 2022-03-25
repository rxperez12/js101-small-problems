function swapName(string) {
  let stringArr = string.split(" ");
  let lastName = stringArr.pop();
  return `${lastName}, ${stringArr.join(" ")}`;
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
console.log(swapName("Karl Oskar Henriksson Ragvals")); // "Ragvals, Karl Oskar Henriksson"
