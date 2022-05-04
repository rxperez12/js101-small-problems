/*
Problem: Given a string, return the percentages of lowercase characters, percentage of characters that are uppercase, and percentage that are neither. Return answers in an object with lowercase, uppercase and neither are keys.

Input: string
Output: object

Implied: Percentages should be out of 100 and rounded to two digits

*/

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
