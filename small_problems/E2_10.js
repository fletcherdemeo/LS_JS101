// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const readline = require('readline-sync');
const today = new Date();
const year = today.getFullYear();

console.log('What is your age? ')
let age = parseInt(readline.prompt());
console.log('At what age would you like to retire? ')
let retirementAge = parseInt(readline.prompt());

console.log(`It's ${year}. You will retire in ${year + retirementAge - age}`)
console.log(`You have only ${retirementAge - age} years of work to go!`)