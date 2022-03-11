function isLeapYear(year) {
  let answer = false;
  if (year > 1751) {
    if (year % 4 === 0) {
      if (year % 100 !== 0 || year % 400 === 0) {
        answer = true;
      }
    }
  } else {
    if (year % 4 === 0) {
      answer = true;
    }
  }
  console.log(answer);
  return answer;
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true
