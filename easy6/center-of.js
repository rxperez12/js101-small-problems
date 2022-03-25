function centerOf(string) {
  let halfLengthIndex = (string.length - 1) / 2;
  if (string.length % 2 === 1) {
    return string[halfLengthIndex];
  } else {
    let firstIndex = Math.floor(halfLengthIndex);
    return string.slice(firstIndex, firstIndex + 2);
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
