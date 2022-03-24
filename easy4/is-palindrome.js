function isPalindrome(string) {
  let stringArr = string.split("");
  let stringArrReverse = [...stringArr].reverse();
  return JSON.stringify(stringArr) === JSON.stringify(stringArrReverse);
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Madam")); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome("356653")); // true
