const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

let another = "";

function performCalculation() {
  prompt(MESSAGES["first_q"]);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(MESSAGES["incorrect_num"]);
    number1 = readline.question();
  }
  
  prompt(MESSAGES["second_q"]);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(MESSAGES["incorrect_num"]);
    number2 = readline.question();
  }
  
  prompt(MESSAGES["operation_q"]);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES["incorrect_op"]);
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(MESSAGES["result"] + output);  

  prompt(MESSAGES["another_q"]);
  another = readline.question();
}

performCalculation();

while (another === "yes") {
  performCalculation();
}