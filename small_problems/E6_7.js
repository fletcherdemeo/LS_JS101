// Write a function that takes a string argument and returns a new string
// containing the words from the string argument in reverse order.

// LS's buggy solution
// let reverseSentence = (str) => str.split('').reverse().join('');
let reverseSentence = (str) => str.split(' ').reverse().join(' ');

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"