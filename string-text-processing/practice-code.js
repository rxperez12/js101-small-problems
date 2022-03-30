// function capitalize(string) {
//   return string[0].toUpperCase() + string.slice(1).toLowerCase();
// }

// function accum(string) {
//   let stringArr = string.split("");
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     let repeatChars = string[i].repeat(i + 1);
//     result.push(capitalize(repeatChars));
//   }
//   return result.join("-");
// }

// console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"
const LOWERCASE_LETTER_NUMBER = 26;

function filterLowercase(string) {
  let regex = /[^a-z]/g;
  return string.replace(regex, "");
}

function createResultArrayEmpty() {
  let result = [];
  for (let i = 0; i < LOWERCASE_LETTER_NUMBER; i++) {
    result.push(0);
  }
  return result;
}

function decrypt(string) {
  let result = createResultArrayEmpty();
  let stringFiltered = filterLowercase(string);
  for (let i = 0; i < stringFiltered.length; i++) {
    let letterCode = stringFiltered.charCodeAt(i) - 97;
    result[letterCode] += 1;
  }
  return result.join("");
}

console.log(decrypt("$aaaa#bbb*ccfff!z") === "43200300000000000000000001");
console.log(
  decrypt("z$aaa#ccc%eee1234567890") === "30303000000000000000000001"
);
console.log(
  decrypt("the quick brown fox jumps over the lazy dog") ===
    "11113112111111411212211111"
);
console.log(decrypt("a1b2c3D4dda") === "21120000000000000000000000");
console.log(decrypt("a1aba2aca3aDaa4dda") === "91120000000000000000000000");
console.log(decrypt("1203904942@$2") === "00000000000000000000000000");
console.log(decrypt("ABCJDK3ROKGMIS3949") === "00000000000000000000000000");
console.log(decrypt("") === "00000000000000000000000000");
