function utf16Value(str) {
  let strArr = str.split("");
  let result = strArr.reduce((a, b) => a + b.charCodeAt(0), 0);
  console.log(result);
  return result;
}
utf16Value("Four score"); // 984
utf16Value("Launch School"); // 1251
utf16Value("a"); // 97
utf16Value(""); // 0

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);
utf16Value(OMEGA + OMEGA + OMEGA);
