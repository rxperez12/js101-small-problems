/*
Problem: 
Find the sentence with the most words and return it to the user. Sentences are split by periods, question marks or exclamation points. Words are split up by spaces.

Explicit: Do not remove punctuation at the end of sentences.
Input: string
Output: console.log sentence with the most words followed
by a new line
console.log of number of words that sentence has

Algorithm:
Create a helper function that separates the paragraph into sentences.
Create a variable that tracks the beginning of a sentence.
Iterating over the characters, if it is equal to either .?!, then push previous characters into array.
When finding the end of the sentence, reset sentence start variable to next character and continue iterating down the string.
Return array of arrays containing all the sentences.

In the main function, create variables to keep track of index of largest sentence an sentence length.
iterating over array of arrays, split the sentence by space character and filter any entries that only contain whitespace.
Get length of sentence array and compare to previous longest sentence. If longer replace previous value and update index value.
Once through, log the longest sentence and it's length to the console.

*/
function separateSentences(string) {
  let result = [];
  let lastSentenceEnd = 0;
  for (let i = 0; i < string.length; i++) {
    if (".!?".includes(string[i])) {
      result.push(string.slice(lastSentenceEnd, i + 1));
      lastSentenceEnd = i + 1;
    }
  }
  return result;
}

function longestSentence(string) {
  let paragraphArray = separateSentences(string);
  let longestLength = 0;
  let longestIndex = 0;
  for (let i = 0; i < paragraphArray.length; i++) {
    let sentenceLength = paragraphArray[i].split(" ").filter(function (elem) {
      return /\S/.test(elem);
    }).length;
    if (sentenceLength > longestLength) {
      longestLength = sentenceLength;
      longestIndex = i;
    }
  }
  console.log(paragraphArray[longestIndex]);
  console.log(`\nThe longest sentence has ${longestLength} words.`);
}

let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this.";

let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

// longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

// longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

// longestSentence("Where do you think you're going? What's up, Doc?");
// // Where do you think you're going?
// //
// // The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// // To be or not to be!
// //
// // The longest sentence has 6 words.

/*
Problem: Given these blocks
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
Take a string and evaluate if it can be spelled out by the blocks provided that you use each only once.

Explicit: case of letters does not matter
Input:String
Output: Boolean

Algorithm:
Change the string to lowercase.
Create variable that keeps track of letters that cannot be used in the word.
Add blocks into array as strings.
Starting with the first letter, check if letter exists in invalid letters.
Return false if letter is found.
Otherwise, go through block array and find block that contains particular letter.
Add this block to invalid letters that can no longer be used and continue on to the next letter.
If the loop successfully gets to the end of the word, return true

*/
// let blockArray = [
//   "bo",
//   "xk",
//   "dq",
//   "cp",
//   "na",
//   "gt",
//   "re",
//   "fs",
//   "jw",
//   "hu",
//   "vi",
//   "ly",
//   "zm",
// ];

// function isBlockWord(string) {
//   let stringLower = string.toLowerCase();
//   let invalidLetters = "";
//   for (const letter of stringLower) {
//     if (invalidLetters.includes(letter)) return false;
//     invalidLetters += blockArray.find((elem) => elem.includes(letter));
//   }
//   return true;
// }

// console.log(isBlockWord("BATCH")); // true
// console.log(isBlockWord("BUTCH")); // false
// console.log(isBlockWord("jest")); // true
// console.log(isBlockWord("floW")); // true
// console.log(isBlockWord("APPLE")); // false
// console.log(isBlockWord("apple")); // false
// console.log(isBlockWord("apPLE")); // false
// console.log(isBlockWord("Box")); // false

/*
Problem: 
Given an input number: n, for n rounds, for an n number of lights start at the beginning and flip the switches on for lights at positions that are multiples of the round i.e. for first round, flip all the switches, for second round flip switches in position 2, 4, etc. 

Input: integer
Output:  array with positions of lights that are on.

Algorithm:
Create helper function that creates array of false values equal to the length of the input number
Create variable tracking how many rounds have been completed.
While rounds are less than input number, 'flip' the values i.e. true to false or viceversa for the positions in boolean array where of the index + 1 is a multiple of the round. 
Do this for all the rounds.
Change the true values in the array to it's index + 1 and filter out all false values.
Return array to user.
 */
function createLightArr(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(false);
  }
  return result;
}

function lightsOn(switches) {
  let lightArray = createLightArr(switches);
  let count = 1;
  while (count <= switches) {
    lightArray = lightArray.map(function (elem, index) {
      if ((index + 1) % count === 0) {
        return !elem;
      } else {
        return elem;
      }
    });
    count++;
  }
  return lightArray
    .map(function (elem, index) {
      if (elem) return index + 1;
      return elem;
    })
    .filter((elem) => typeof elem === "number");
}

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
