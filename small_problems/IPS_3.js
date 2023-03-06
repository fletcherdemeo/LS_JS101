// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument and returns true if
// the word can be spelled using the set of blocks, false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

// Problem
// Given list of blocks (list comprising two letters)
// Determine if block letters are within input word
// If input word can be written without use of block letters return true

// Data structures
// List of lists to store blocks

// Algorithm
// 1. Loop through blocks
//    - Check if any of the blocks are within input word
//    - If any are then return false, otherwise return true

const BLOCKS = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'],
  ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
  ['Z', 'M']
]

function isBlockWord(word) {
  let letters = word.toUpperCase().split('');

  return !BLOCKS.some(block => {
    return (letters.includes(block[0]) && letters.includes(block[1]));
  });
}

// Examples:

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true