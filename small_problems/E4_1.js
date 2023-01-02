const readline = require('readline-sync');

let first = readline.question('Enter the 1st number: ')
let second = readline.question('Enter the 2nd number: ')
let third = readline.question('Enter the 3rd number: ')
let fourth = readline.question('Enter the 4th number: ')
let fifth = readline.question('Enter the 5th number: ')
let last = readline.question('Enter the last number: ')

numArray = [first, second, third, fourth, fifth];
let appearsStr = numArray.includes(last) ? 'appears' : 'does not appear';
console.log(`The number ${last} ${appearsStr} in ${numArray.join()}.`);