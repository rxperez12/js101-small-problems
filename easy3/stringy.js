function stringy(int) {
  let result = "";
  for (let i = 0; i < int; i++) {
    result += i % 2 === 0 ? "1" : "0";
  }
  console.log(result);
  return result;
}

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
