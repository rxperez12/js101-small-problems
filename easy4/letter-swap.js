function swap(string) {
  if (string.length < 2) return string;
  let stringArr = string.split(" ").map((word) => {
    if (word.length === 1) return word;
    return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  });
  return stringArr.join(" ");
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
