function leadingSubstrings(string, resultArray) {
  for (let i = 0; i < string.length; i++) {
    resultArray.push(string.slice(0, i + 1));
  }
}

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    leadingSubstrings(string.slice(i), result);
  }
  return result;
}

console.log(substrings("abcde"));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
