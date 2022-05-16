/*
Problem: Given an array of numbers, return an array with the number of integers that are smaller that that number, not including repeated numbers. 
Input: Array of numbers
Output: New array with number values

Implied: If there is only one value, return array with 0

Data Structure:
Array

Algorithm:
Use helper fucnction to Create new array without duplicate numbers. Use this array as our basis for comparing the number. 
Select first value and compare to numbers in the comparison array. If the number is less than our selected value, map 1 in place, otherwise 0.
Add array of 1 and 0 to find number of numbers less that current value and place into result array that will be returned to user.
Return new array result to user.

*/

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:
// function arrayWithoutDuplicates(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!result.includes(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// function smallerNumbersThanCurrent(array) {
//   let result = [];
//   let comparisonArray = arrayWithoutDuplicates(array);
//   for (const value of array) {
//     let countArray = comparisonArray.map((elem) => {
//       return elem < value ? 1 : 0;
//     });
//     result.push(countArray.reduce((a, b) => a + b, 0));
//   }
//   return result;
// }

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent([1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

/*
Problem: Given an input array, if the array has more that 5 intergers, then return the smallest sum of 5 consecutive numbers. If it's not long enough, then return null. 

Input: Array
Output: Number or null depending on array length.

Implicit: Numbers can be both positive and negative

Data Structure:
Array

Algorithm:
First test if array is at least 5 values. If not return null
If only 5, return sum of the values.
If longer than 5, starting from the first digit, use helper function to find sum of the 5 numbers.
Do this for all number while you can still sum 5 digits. Save value if it's smaller than previous values
Return smallest value

*/

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:
// function sumOfArray(array) {
//   return array.reduce((a, b) => a + b);
// }

// function minimumSum(array) {
//   if (array.length < 5) return null;
//   if (array.length === 5) return sumOfArray(array);

//   let smallestValue = sumOfArray(array.slice(0, 5));
//   for (let i = 1; i <= array.length - 5; i++) {
//     let sumArray = sumOfArray(array.slice(i, i + 5));
//     if (sumArray < smallestValue) {
//       smallestValue = sumArray;
//     }
//   }
//   return smallestValue;
// }

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

// Problem 3

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
Implicit: Words are separated by spaces
Input: string
Output: same string with every other word having each letter in index 3, 7, etc captialized

Algorithm:
Create emptyr result array.
First want to separate string into array with words
Go through array, and if the index is odd, capitalize the words in that partcular element, push into result array.
If it isn't push the word into result.
Join the result and return to user
*/

// function captializeFourthWord(string){

//   let finalWord = "";
//   for (let j = 0; j < word.length; j++) {
//     let currentLetter = word[j];
//     if (j % 4 === 3) {
//       finalWord += currentLetter.toUpperCase();
// }

// function toWeirdCase(string) {
//   let result = [];
//   let stringArray = string.split(" ");
//   for (let i = 0; i < stringArray.length; i++) {
//     let word = stringArray[i];
//     if (i % 2 === 1) {
//       let finalWord = "";
//       for (let j = 0; j < word.length; j++) {
//         let currentLetter = word[j];
//         if (j % 4 === 3) {
//           finalWord += currentLetter.toUpperCase();
//         } else {
//           finalWord += word[j];
//         }
//       }
//       result.push(finalWord);
//     } else {
//       result.push(word);
//     }
//   }
//   return result.join(" ");
// }

// // Examples:

// console.log(
//   toWeirdCase("Lorem Ipsum is simply dummy text of the printing world") ===
//     "Lorem IpsUm is simPly dummy texT of the printing worLd"
// );
// console.log(
//   toWeirdCase(
//     "It is a long established fact that a reader will be distracted"
//   ) === "It is a lonG established facT that a reader wilL be disTracTed"
// );
// console.log(toWeirdCase("aaA bB c") === "aaA bB c");
// console.log(
//   toWeirdCase(
//     "Miss Mary Poppins word is supercalifragilisticexpialidocious"
//   ) === "Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus"
// );

// The tests above should print "true".

// Problem 4

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
Input: Array of integers
Output: Array of two integers that are the closest together

Algorithm:
Create empty array of two numbers that are the smallest
Create variable to save our smallest subtracted value
Starting from the first number, go through the array and subtract the numbers together
If the absolute value of subracted number is smaller than our smallest value, save numbers in empty array, and update smallest value
Do this for all numbers
Return array of two numbers to user
*/

// Examples:

// console.log(closestNumbers([5, 25, 15, 11, 20])); // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17])); // [12, 7]

// function solution(number) {
//   if (number < 0) return 0;
//   let result = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }

// console.log(solution(10));

/*
Input: String of words with each word containing a 
number. Numbers will be between 1 to 9.
Output: String of words with words in order starting
from 1 and increasing. If empty input, return empty string.

Implied: Strings won't have all the numbers.
Words be separated by spaces

Algorithm:
Split string by spaces.
For each word, separate out the number and the index in the
original array. Save these numbers in new array.
Sort new array by increasing order of numbers and
replace numbers with the word of original array.
Join array and return string to user.
*/
// function order(words) {
//   let regex = /[1-9]/g;
//   let wordsArray = words.split(" ");
//   let numArray = words.match(regex);
//   numArray = numArray
//     .map((num, index) => [Number(num), index])
//     .sort((a, b) => a[0] - b[0]);
//   let result = numArray.map((elem) => wordsArray[elem[1]]).join(" ");
//   return result;
// }
/*
Problem: Given string of letters, return string with the first letter of each capitalized and the length corresponding to the index of the letter i.e 0 = 1. Return string with each series of letters separated by a -

Implied: Capitalization doesn't matter. First letter is always capitalized, other letters are always lowercase

Algo:
change all the string to lowercase letters.
Create new string result to pass back to user
starting with the first letter, add string with corresponding amount of letter to result.
Do this for all letters and return string back to user.
*/
// function accum(s) {
//   let result = "";
//   let string = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     let strPart = string[i].toUpperCase();
//     if (i > 0) strPart += string[i].repeat(i);
//     result += strPart;
//     if (i < s.length - 1) result += "-";
//   }
//   return result;
// }

// console.log(accum("HbideVbxncC"));

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Input: Number
Output: Number with all of the digits of previous number added up. If that number is 10 or larger keep adding numbers until number is only one digit.

Algo:
Take number and turn it into a string.
If the length of the string is more than 1, add all the numbers together and save this as the new number. Keep summing numbers together until final answer has no more than 1 digit.
Return answer to user
*/

// function digital_root(n) {
//   let number = n;
//   while (String(number).length > 1) {
//     let sum = String(number)
//       .split("")
//       .reduce((a, b) => Number(a) + Number(b), 0);
//     number = sum;
//   }
//   return number;
// }

// function validatePIN(pin) {
//   let regex = /[^\d]/g;
//   if (regex.test(pin)) return false;
//   return pin.length === 4 || pin.length === 6;
// }

// const binaryArrayToNumber = (arr) => {
//   let result = 0;
//   let binary = 1;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result += binary * arr[i];
//     binary *= 2;
//   }
//   return result;
// };
// const ALPH = "abcdefghijklmnopqrstuvwxyz";

// function findMissingLetter(array) {
//   let lowercaseArray = array.map((letter) => letter.toLowerCase());
//   let alphIndex = ALPH.indexOf(lowercaseArray[0]);
//   for (const elem of lowercaseArray) {
//     console.log(elem);
//     console.log(ALPH[alphIndex]);
//     if (elem !== ALPH[alphIndex]) {
//       return array[0].toLowerCase() === array[0]
//         ? ALPH[alphIndex]
//         : ALPH[alphIndex].toUpperCase();
//     } else {
//       alphIndex += 1;
//     }
//   }
//   return " ";
// }

// function narcissistic(value) {
//   let valueArray = String(value)
//     .split("")
//     .map((num) => Number(num));
//   let sum = valueArray.reduce(
//     (previous, next) => previous + next ** valueArray.length,
//     0
//   );
//   return value === sum;
// }

// console.log(narcissistic(153));

const ALPH = "abcdefghijklmnopqrstuvwxyz";

function createEmptyArray() {
  let result = [];
  for (let i = 0; i < ALPH.length; i++) {
    result.push(0);
  }
  return result;
}

function isPangram(string) {
  let stringLower = string.toLowerCase();
  let letterArray = createEmptyArray();
  for (const elem of stringLower) {
    let index = ALPH.indexOf(elem);
    letterArray[index] += 1;
  }
  return letterArray.every((num) => num > 0);
}
