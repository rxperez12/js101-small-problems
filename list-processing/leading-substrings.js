function leadingSubstrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string.slice(0, i + 1));
  }
  return result;
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
