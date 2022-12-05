const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Select language:\n 1) English 2) Spanish 3) Italian');
let lang_choice = readline.question();
let lang;
switch (lang_choice) {
  case '1':
    lang = 'eng';
    break;
  case '2':
    lang = 'esp';
    break;
  case '3':
    lang = 'ita';
    break;
}

console.log(lang)
console.log(typeof(lang_choice))

while (!['eng', 'esp', 'ita'].includes(lang)) {
  prompt(MESSAGES["incorrect_lang"]);
  operation = readline.question();
}

prompt(MESSAGES[lang]['welcome']);

let another = "";

function performCalculation() {
  prompt(MESSAGES[lang]["first_q"]);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(MESSAGES[lang]["incorrect_num"]);
    number1 = readline.question();
  }
  
  prompt(MESSAGES[lang]["second_q"]);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(MESSAGES[lang]["incorrect_num"]);
    number2 = readline.question();
  }
  
  prompt(MESSAGES[lang]["operation_q"]);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[lang]["incorrect_op"]);
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
  
  prompt(MESSAGES[lang]["result"] + output);  

  prompt(MESSAGES[lang]["another_q"]);
  another = readline.question();
}

performCalculation();

while (["yes", "sí", "sì"].includes(another)) {
  performCalculation();
}