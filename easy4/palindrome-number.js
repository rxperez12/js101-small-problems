function isPalindromicNumber(number) {
  let numString = String(number);
  return numString === numString.split("").reverse().join("");
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));

// isPalindromicNumber(34543); // true
// isPalindromicNumber(123210); // false
// isPalindromicNumber(22); // true
// isPalindromicNumber(5); // true
