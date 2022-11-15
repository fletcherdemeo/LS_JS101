// Write a program that asks the user to enter an integer greater than 0, then asks whether 
// the user wants to determine the sum or the product of all numbers between 1 and the 
// entered integer, inclusive.

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

const readline = require('readline-sync');

let int = parseInt(readline.question("Please enter an integer greater than 0: "), 10);
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
let computeValue = 1;
let operatorStr = ""

if (operation === "s") {
  operatorStr = "sum";
} else if (operation === "p") {
  operatorStr = "product";
}

for (let i = 1; i < int; i += 1) {
  switch (operation) {
    case "s": 
      computeValue += (i + 1);
      break;
    case "p":
      computeValue *= (i + 1);
      break
  }
}

console.log(`The ${computeStr} of the integers between 1 and ${int} is ${computeValue}`);
