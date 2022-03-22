function findFibonacciIndexByLength(length) {
  let firstNumber = 1n;
  let secondNumber = 1n;
  let count = 2n;

  while (String(secondNumber).length < length) {
    let fibSequence = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = fibSequence;
    count += 1n;
  }
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
