const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function afterMidnight(time) {
  let hours = Number(time.slice(0, 2));
  if (hours === 24) hours = 0;
  let minutes = Number(time.slice(3));
  return hours * MINUTES_IN_HOUR + minutes;
}

function beforeMidnight(time) {
  let hours = Number(time.slice(0, 2));
  if (hours === 0) hours = 24;
  let minutes = Number(time.slice(3));
  let hoursInMinutes = (HOURS_IN_DAY - hours) * MINUTES_IN_HOUR;
  return hoursInMinutes - minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
