function isRealPalindrome(string) {
  let regex = /[a-z0-9]+/gi;
  let filteredString = regex.exec(string);
  let stringArr = filteredString[0].toLowerCase().split("");
  return stringArr.join("") === [...stringArr].reverse().join("");
}
console.log(isRealPalindrome("madam"));
console.log(isRealPalindrome("Madam"));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome("356a653"));
console.log(isRealPalindrome("123ab321"));

// isRealPalindrome("madam"); // true
// isRealPalindrome("Madam"); // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
// isRealPalindrome("356653"); // true
// isRealPalindrome("356a653"); // true
// isRealPalindrome("123ab321"); // false
