function repeater(string) {
  if (string.length === 0) {
    return string;
  } else {
    return string
      .split("")
      .map((letter) => letter + letter)
      .join("");
  }
}

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
