function isUppercase(string) {
  return (
    string.split("").filter((letter) => letter === letter.toUpperCase())
      .length === string.length
  );
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
