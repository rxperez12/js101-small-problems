function twice(number) {
  let numStringArray = String(number).split("");

  let halfIndex = Math.floor(numStringArray.length / 2);
  let numArray1 = numStringArray.slice(0, halfIndex);
  let numArray2 = numStringArray.slice(halfIndex);
  if (JSON.stringify(numArray1) === JSON.stringify(numArray2)) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
