function shortLongShort(str1, str2) {
  let str1Arr = [str1, str1.length];
  let str2Arr = [str2, str2.length];
  let longest = str1Arr[1] > str2Arr[1] ? str1Arr : str2Arr;
  let shortest = str1Arr[1] > str2Arr[1] ? str2Arr : str1Arr;
  if (shortest[1].length === 0) {
    return longest[0];
  } else {
    return shortest[0] + longest[0] + shortest[0];
  }
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
