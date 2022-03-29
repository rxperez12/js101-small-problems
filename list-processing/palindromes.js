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

function palindromes(string) {
  let substringArr = substrings(string);
  return substringArr.filter((substring) => {
    let substringReverse = substring.split("").reverse().join("");
    if (substring === substringReverse && substring.length > 1) {
      return substring;
    }
  });
}

console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
