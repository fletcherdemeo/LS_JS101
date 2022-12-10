const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number, mustBePositive = false) {
  let isNotANumber = number.trimStart() === '' || Number.isNaN(Number(number)); 
  if (mustBePositive) {
    return isNotANumber || Number(number) <= 0;
  }
  return isNotANumber || Number(number) < 0;
}

// Get loan amount
prompt(MESSAGES['loanAmount']);
let loanAmount = readline.question();
while (invalidNumber(loanAmount)) {
  prompt(MESSAGES['validNumber']);
  loanAmount = readline.question();
}

// Get annual percentage rate
prompt(MESSAGES['annualRate']);
let annualRate = readline.question();
while (invalidNumber(annualRate)) {
  prompt(MESSAGES['validNumber']);
  annualRate = readline.question();
}

// Get loan length in years
prompt(MESSAGES['loanDuration']);
let loanDurationYears = readline.question();
while (invalidNumber(loanDurationYears, true)) {
  prompt(MESSAGES['validNumber']);
  loanDurationYears = readline.question();
}

// Create calculation variables
let loanDurationMonths = Number(loanDurationYears) * 12;
let monthlyRate = (Number(annualRate) / 100) / 12;
let monthlyPayment;
if (annualRate === '0') {
  monthlyPayment = Number(loanAmount) / loanDurationMonths;
} else {
  monthlyPayment =
    Number(loanAmount) *
    (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));
}

// Display monthly payment in dollar and cents format
prompt(MESSAGES['monthlyPayment'] + monthlyPayment.toFixed(2));
