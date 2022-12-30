const readline = require('readline-sync');
const VALID_INPUTS = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
const GAME_RULES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper']
};
const GAME_LENGTH = 3;

function displayGrandWinner(userScore, computerScore) {
  let grandWinner = userScore > computerScore ? 'You are' : 'Computer is';
  prompt(`${grandWinner} the grand winner - ${userScore} : ${computerScore}`);
}

function getComputerChoice(values) {
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function getWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return 'user';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && GAME_RULES['rock'].includes(computerChoice)) ||
         (choice === 'paper' && GAME_RULES['paper'].includes(computerChoice)) ||
         (choice === 'scissors' && GAME_RULES['scissors'].includes(computerChoice)) ||
         (choice === 'spock' && GAME_RULES['spock'].includes(computerChoice)) ||
         (choice === 'lizard' && GAME_RULES['lizard'].includes(computerChoice));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let validInputs = Object.keys(VALID_INPUTS);
let validChoices = Object.values(VALID_INPUTS);

let continueGame = true;
while (continueGame) {
  let userScore = 0;
  let computerScore = 0;

  while (userScore < GAME_LENGTH && computerScore < GAME_LENGTH) {
    prompt(`Choose one: ${validChoices.join(', ')} (valid inputs - ${validInputs.join(', ')})`);
    let choice = VALID_INPUTS[readline.question().toLowerCase()];

    while (!validChoices.includes(choice)) {
      prompt("That's not a valid choice");
      choice = VALID_INPUTS[readline.question().toLowerCase()];
    }

    let computerChoice = getComputerChoice(validChoices);

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let winner = getWinner(choice, computerChoice);
    if (winner === 'user') {
      prompt('You win!');
      userScore += 1;
    } else if (winner === 'computer') {
      prompt('Computers wins!');
      computerScore += 1;
    } else {
      prompt("It's a tie!");
    }
  }

  displayGrandWinner(userScore, computerScore);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') continueGame = false;
}