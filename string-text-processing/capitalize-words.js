function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function wordCap(string) {
  return string
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
