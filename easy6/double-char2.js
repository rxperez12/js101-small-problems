function doubleConsonants(string) {
  if (string.length === 0) {
    return string;
  } else {
    let regex = /^[aeiou0-9-]|\W$/i;
    return string
      .split("")
      .map((letter) => {
        if (!regex.test(letter)) {
          return letter + letter;
        } else {
          return letter;
        }
      })
      .join("");
  }
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants(""));
