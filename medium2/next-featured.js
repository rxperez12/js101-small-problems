function isFeaturedNum(num) {
  if (num % 2 === 0) return false;
  let numArray = String(num).split("");
  for (let i = 0; i < numArray.length; i++) {
    let arraySlice = numArray.slice(i + 1);
    if (arraySlice.includes(numArray[i])) return false;
  }
  return true;
}

function featured(num) {
  let multipleOfSeven = 7;
  while (multipleOfSeven < 9876543201) {
    if (multipleOfSeven > num) return multipleOfSeven;
    while (true) {
      multipleOfSeven += 7;
      if (isFeaturedNum(multipleOfSeven)) break;
    }
  }
  return "There is no possilbe number that fufills those requirements.";
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
