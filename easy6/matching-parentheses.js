function isBalanced(string) {
  let parentheses = string
    .split("")
    .filter((char) => char === "(" || char === ")")
    .map((paren) => {
      if (paren === "(") return 1;
      if (paren === ")") return -1;
    });
  let count = 0;
  let balanced = true;
  for (const num of parentheses) {
    count += num;
    if (count < 0) balanced = false;
  }
  if (count !== 0) balanced = false;
  return balanced;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
