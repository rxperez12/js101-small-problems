function crunch(string) {
  let strArray = string.split("");
  let result = [];
  for (let i = 0; i < strArray.length; i++) {
    if (result[result.length - 1] !== strArray[i]) {
      result.push(strArray[i]);
    }
  }
  return result.join("");
}

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
