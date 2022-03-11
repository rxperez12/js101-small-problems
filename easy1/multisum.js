function multisum(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  console.log(result);
  return result;
}

multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
