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
function arrayWithoutDuplicates(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function smallerNumbersThanCurrent(array) {
  let result = [];
  let comparisonArray = arrayWithoutDuplicates(array);
  for (const value of array) {
    let countArray = comparisonArray.map((elem) => {
      return elem < value ? 1 : 0;
    });
    result.push(countArray.reduce((a, b) => a + b, 0));
  }
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

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
