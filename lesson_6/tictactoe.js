const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const YES_NO_OPTIONS = ['y', 'n'];
const START_OPTIONS = ['p', 'c', 'r'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getAnswer(message, options) {
  let answer;

  while (true) {
    prompt(message);
    answer = readline.question().toLowerCase();
    if (options.includes(answer)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  return answer;
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function joinOr(arr, delimiter = ", ", joinWord = "or") {
  if (arr.length <= 1) return arr.toString();

  let arrElements = arr.slice(0, arr.length - 1).join(delimiter);
  let lastEl = `${joinWord} ${arr[arr.length - 1]}`;

  return `${arrElements} ${lastEl}`;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(board, marker) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === marker &&
      board[sq2] === marker &&
      emptySquares(board).includes(`${sq3}`)
    ) {
      return sq3;
    } else if (
      board[sq2] === marker &&
      board[sq3] === marker &&
      emptySquares(board).includes(`${sq1}`)
    ) {
      return sq1;
    } else if (
      board[sq1] === marker &&
      board[sq3] === marker &&
      emptySquares(board).includes(`${sq2}`)
    ) {
      return sq2;
    }
  }
  if (emptySquares(board).includes('5')) return '5';
  return null;
}

function computerChoosesSquare(board) {
  let square =
    findAtRiskSquare(board, COMPUTER_MARKER) ||
    findAtRiskSquare(board, HUMAN_MARKER);
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, player) {
  if (player === "p") {
    playerChoosesSquare(board);
  } else if (player === "c") {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  return player === "p" ? "c" : "p";
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let playerWins = 0;
  let computerWins = 0;

  let currentPlayer = getAnswer(
    'Who should start first? (p for Person, c for Computer or r for Random)',
    START_OPTIONS
  );
  if (currentPlayer === 'r') {
    let options = ['p', 'c'];
    let random = Math.floor(Math.random() * 2);
    currentPlayer = options[random];
  }

  while (playerWins < GAMES_TO_WIN && computerWins < GAMES_TO_WIN) {
    let board = initializeBoard();
    while (true) {
      displayBoard(board);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      prompt(`${winner} won!`);
      if (winner === 'Player') playerWins += 1;
      if (winner === 'Computer') computerWins += 1;
    } else {
      prompt("It's a tie!");
    }

    prompt(`Player: ${playerWins} - Computer: ${computerWins}`);

    if (playerWins === 5) {
      prompt('Player is champion');
      break;
    } else if (computerWins === 5) {
      prompt('Computer is champion');
      break;
    }

    let playAgain = getAnswer('Play again? (y or n)', YES_NO_OPTIONS);
    if (playAgain === 'y') continue;
    if (playAgain === 'n') break;
  }

  let rematch = getAnswer('Would you like a rematch? (y or n)', YES_NO_OPTIONS);
  if (rematch === 'y') continue;
  if (rematch === 'n') {
    prompt('Thanks for playing Tic Tac Toe!');
    break;
  }
}
