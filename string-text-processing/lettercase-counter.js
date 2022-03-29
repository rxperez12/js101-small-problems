function letterCaseCount(string) {
  let result = { uppercase: 0, lowercase: 0, neither: 0 };
  let uppercaseCount = string.replace(/[a-z\W\d]/g, "").length;
  let lowercaseCount = string.replace(/[A-Z\W\d]/g, "").length;
  let neitherCount = string.length - uppercaseCount - lowercaseCount;
  result.uppercase = uppercaseCount;
  result.lowercase = lowercaseCount;
  result.neither = neitherCount;
  return result;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
