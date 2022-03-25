function dms(number) {
  let degree = Math.floor(number);
  let minutes = (number - degree) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;
  return `${degree}˚${padZero(Math.floor(minutes))}'${padZero(
    Math.floor(seconds)
  )}"`;
}

function padZero(number) {
  let stringNum = String(number);
  if (String(number).length === 1) {
    stringNum = "0" + stringNum;
  }
  return stringNum;
}
console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
