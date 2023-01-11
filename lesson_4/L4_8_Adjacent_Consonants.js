// Problem

// Given an array of strings, return a new array where the strings are sorted
// to the highest number of adjacent consonants a particular string contains.
// If two strings contain the same highest number of adjacent consonants they
// should retain their original order in relation to each other. Consonants
// are considered adjacent if they are next to each other in the same word or
// if there is a space between two consonants in adjacent words.

// input: array (array of strings)
// output: array (array of sorted strings)
// rules: 
//       - explicit requirements:
//         - sort strings by highest number of adjacent consonants
//         - adjacent consonants are next to each other in same word or where 
//           there are two consonants in adjacent words
//         - if two strings contain same number of adjacent cononsants then 
//           original order should be retained

//       - implicit requirements:
//         - consonants are non-vowel letters e.g. b, c, d etc
//         - adjacent letters do not have to be same consonant i.e. does not
//           have to be bbbb
//         - strings can contain multiple words
//         - one consonant does not indicate any adjacency and should be treated 
//           the same as zero consonants

// questions:
//       - Do strings always contain multiple words? No
//         - Can strings contain a single word? Yes
//         - Can strings be empty? Not tested - assume no
//       - Is it possible for a string to contain no adjacent consonants? Yes
//       - What is meant by "a space between two consonants in adjacent words"? Refer test 2
//       - Should the words be strings be sorted in ascending or descending order? Descending
//       - Is case important? Not tested - can ignore this for now

// Examples and test cases

// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

// Data structures

// processing: perhaps split string into an array to compare values?

// Algorithm

// sortStringsByConsonants
// 1. Start with:
//    - A string of vowels that contains vowels in regex format
// 2. For each string in the array: (MOVED TO HELPER FUNCTION)
//    - Remove spaces from string
//    - Replace vowels with spaces in string
//    - Split the array into strings by space
//    - Filter the split array to return the longest string length if consonant string
//      length is 1 or 0 then return 0 (one consonant does not indicate adjacency)
// 3. Sort array by descending order based on return value of helper function

// Code

const VOWELS_REGEX = /[aeiou]/g;

function getAdjacentConsonantsCount(str) {
  let adjacentConsonants = str
    .replace(/\s/g, '')
    .replace(VOWELS_REGEX, ' ')
    .split(' ')
    .map(str => str.length > 1 ? str.length : 0)

  return Math.max(...adjacentConsonants);
}

function sortStringsByConsonants(arr) {
  return arr.sort((a, b) => {
    return getAdjacentConsonantsCount(b) - getAdjacentConsonantsCount(a);
  });
}


console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
