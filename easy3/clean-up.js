function cleanUp(string) {
  let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUpperCase = alphabetLowerCase.toUpperCase();
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      alphabetLowerCase.includes(string[i]) ||
      alphabetUpperCase.includes(string[i])
    ) {
      result += string[i];
    } else if (result[result.length - 1] !== " ") {
      result += " ";
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));
