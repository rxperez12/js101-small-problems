function century(number) {
  let century = Math.floor(number / 100) + 1;
  let numString = String(number);
  if (numString[numString.length - 1] === "0") century--;
  console.log(addsOrdinals(String(century)));
  return addsOrdinals(String(century));
}

function addsOrdinals(string) {
  if (catchWithTh(string.slice(string.length - 2))) {
    return string + "th";
  }
  let lastNum = string[string.length - 1];
  switch (lastNum) {
    case "1":
      return string + "st";
    case "2":
      return string + "nd";
    case "3":
      return string + "rd";
    default:
      return string + "th";
  }
}
function catchWithTh(lastTwo) {
  return lastTwo === "11" || lastTwo === "12" || lastTwo === "13";
}
century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
