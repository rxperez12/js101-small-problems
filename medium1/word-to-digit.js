/*
Problem:
Take all the written occurences of a number word and change them into the correspoding digit character.

Input:
String with words broken up by spaces and punctuation
Output:
Same string with number words replaces by digit characters. 
Implicit:
Keep punctuation when next to the number.

Data Structure:
Parse string into array
Object with number names corresponding to digit character

Algorithm:
Parse string into an array
Take each of the array elements and check if they match the keys of object containing all the number words.
Replace words with numbers, filtering out punctuation.
Join array and return.
*/

function wordToDigit(string) {
  let digits = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  let keys = Object.keys(digits);
  let regex = new RegExp(keys.join("|"), "gi");
  return string.replace(regex, (word) => {
    return digits[word];
  });
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
