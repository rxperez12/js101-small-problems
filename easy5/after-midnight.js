function timeOfDay(minutes) {
  let hoursTime = padZeros(minutesToHours(minutes));
  let minutesTime = padZeros(minutesInDay(minutes));
  return `${hoursTime}:${minutesTime}`;
}

function padZeros(number) {
  let numString = String(number);
  if (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function minutesToHours(minutes) {
  let hours = Math.floor(minutes / 60);
  let hoursIn24 = minutes < 0 ? 24 + (hours % 24) : hours % 24;
  if (hoursIn24 === 24) hoursIn24 = 0;
  return hoursIn24;
}

function minutesInDay(minutes) {
  let minutesAfterHours = minutes % 60;
  let minutesTime =
    minutesAfterHours < 0 ? minutesAfterHours + 60 : minutesAfterHours;
  return minutesTime;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
