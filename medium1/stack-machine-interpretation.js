/*
Problem:
Create a function that can implement a basic stack and register language, utilizing a stack and register value;
Input:
String separated by spaces of either numbers or commands.

Output: result of the commands included in the string. If string doesn't explicilty include print, nothing is returned.

Data Structure:
Parse string into an array to easier seprate values.
Use array to store stack numbers

Algorithm:
Parse string into array.
Create helper functions for each commandthat take in a stack and a register and modify them as needed.


*/

function minilang(string) {
  let stack = [];
  let register = 0;
  let stringArr = string.split(" ");
  let functions = {
    PUSH: function () {
      stack.push(register);
    },
    ADD: function () {
      register += stack.pop();
    },
    SUB: function () {
      register -= stack.pop();
    },
    MULT: function () {
      register *= stack.pop();
    },
    DIV: function () {
      register = Math.trunc(register / stack.pop());
    },
    REMAINDER: function () {
      register = register % stack.pop();
    },
    POP: function () {
      register = stack.pop();
    },
    PRINT: function () {
      console.log(register);
    },
  };
  for (const elem of stringArr) {
    let keys = Object.keys(functions);
    if (!keys.includes(elem)) {
      register = Number(elem);
    } else {
      functions[elem]();
    }
  }
}

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// // 5
// // 3
// // 8

minilang("5 PUSH POP PRINT");
// // 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// // 5
// // 10
// // 4
// // 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// // 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// // 12

minilang("-3 PUSH 5 SUB PRINT");
// // 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
