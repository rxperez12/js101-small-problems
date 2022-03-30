function staggeredCase(string) {
  let count = 0;
  let result = "";
  let regex = /[^a-z]/gi;
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      result += string[i];
      continue;
    }
    if (count % 2 === 0) {
      result += string[i].toUpperCase();
      count++;
    } else {
      result += string[i].toLowerCase();
      count++;
    }
  }
  return result;
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
