// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two', 
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

// Data structures
// 1. Array has keys that correspond to index values i.e. '0', '1', '2' etc
// 2. Array can be used with the numbers spelt out in correct order corresponding
//    to key index

// Algorithm
// 1. Split str array into list of words
// 2. Search through list of words to find words that are numbers
// 3. Reassign words that are numbers to number values
// 4. Return reassigned string

const NUMBERS = [
  'zero', 
  'one', 
  'two', 
  'three', 
  'four', 
  'five', 
  'six', 
  'seven', 
  'eight', 
  'nine'
]

function wordToDigit(str) {
  NUMBERS.forEach((num, ind) => {
    let re = new RegExp(`\\b${num}\\b`, 'gi');
    str = str.replace(re, ind);
  })
  
  return str
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."