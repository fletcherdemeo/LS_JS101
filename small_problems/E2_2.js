// Write a program that will ask for user's name. 
// The program will then greet the user. 
// If the user writes "name!" then the computer yells back to the user.

const readline = require('readline-sync');

console.log("What is your name?");
let userName = readline.question();

userName.endsWith('!') 
  ? console.log(`HELLO ${
    userName.slice(0, -1).toUpperCase()
  }. WHY ARE WE SCREAMING?`)
  : console.log(`Hello ${userName}.`);
