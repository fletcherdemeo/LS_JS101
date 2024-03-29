const readline = require("readline-sync");

const CARD_SUITS = ["club", "diamond", "heart", "spade"];
const YES_NO_OPTIONS = ['y', 'n'];
const HIT_OR_STAY = ['h', 's'];
const GAMES_TO_WIN = 5;
const HIGHEST_SCORE = 21;
const DEALER_HITS_ON = 17;
const NAMES = {player: "PLAYER", dealer: "DEALER", tie: "TIE"};

function prompt(msg) {
  if (msg) {
    console.log(`=> ${msg}`);
  } else {
    console.log("\n");
  }
}

function continueGame(playerTally, dealerTally) {
  return playerTally < GAMES_TO_WIN && dealerTally < GAMES_TO_WIN;
}

function createDeck() {
  let deck = [];
  for (let suit of CARD_SUITS) {
    for (let value = 2; value <= 10; value += 1) {
      deck.push({suit: suit, value: value});
    }
    deck.push(
      {suit: suit, value: "J"},
      {suit: suit, value: "Q"},
      {suit: suit, value: "K"},
      {suit: suit, value: "A"}
    );
  }
  return deck;
}

function dealCards(deck) {
  let player = [];
  let dealer = [];
  let deckCopy = deck.slice();

  for (let iter = 0; iter < 2; iter += 1) {
    for (let hand of [player, dealer]) {
      let card = "";
      [card, deckCopy] = issueCard(deckCopy);
      hand.push(card);
    }
  }

  return [player, dealer, deckCopy];
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function issueCard(deck) {
  let deckCopy = deck.slice();
  let randomIndex = getRandomInt(deckCopy.length);
  let card = deckCopy[randomIndex];
  deckCopy.splice(randomIndex, 1);

  return [card, deckCopy];
}

function sumCards(hand) {
  let runningTotal = hand
    .filter(card => card.value !== "A")
    .reduce((acc, card) => {
      if (["J", "Q", "K"].includes(card.value)) {
        return acc + 10;
      } else {
        return acc + card.value;
      }
    }, 0);

  let acesCount = hand.filter(card => card.value === "A").length;
  let acesValue = 0;
  for (let iter = 0; iter < acesCount; iter += 1) {
    acesValue = (runningTotal >= 11 - iter) ? 1 + iter : 11 + iter;
  }

  return runningTotal + acesValue;
}

function busted(hand) {
  return sumCards(hand) > HIGHEST_SCORE;
}

function displayCards(participant, hand) {
  let total = sumCards(hand);
  prompt(`${participant}s total is ${total} from: ${hand
    .map(card => card.value)
    .join(', ')}`
  );
  if (busted(hand)) prompt(`${participant} is bust!`);
}

function playerTurn(hand, deck) {
  while (true) {
    let answer = getAnswer("Hit or stay? (h or s)", HIT_OR_STAY);
    if (answer === "s") break;
    if (answer === "h") {
      let card = "";
      [card, deck] = issueCard(deck);
      hand.push(card);
      displayCards("Player", hand);
      if (busted(hand)) break;
    }
  }

  return [hand, deck];
}

function dealerTurn(hand, deck) {
  displayCards("Dealer", hand);

  while (sumCards(hand) < DEALER_HITS_ON) {
    prompt("Dealer hits");
    let card = "";
    [card, deck] = issueCard(deck);
    hand.push(card);
    displayCards("Dealer", hand);
  }

  return [hand, deck];
}

function displayWinner(winner) {
  switch (winner) {
    case NAMES.player:
      prompt("Player wins!");
      break;
    case NAMES.dealer:
      prompt("Dealer wins!");
      break;
    default:
      prompt("It's a tie!");
  }
}

function detectWinner(player, dealer) {
  let playerTotal = sumCards(player);
  let dealerTotal = sumCards(dealer);

  let handDiff = playerTotal - dealerTotal;
  if ((handDiff > 0 || busted(dealer)) && !busted(player)) {
    return NAMES.player;
  } else if ((handDiff < 0 || busted(player)) && !busted(dealer)) {
    return NAMES.dealer;
  } else {
    return NAMES.tie;
  }
}

while (true) {
  let playerTally = 0;
  let dealerTally = 0;

  console.clear();
  while (continueGame(playerTally, dealerTally)) {
    prompt(`Score: Player ${playerTally} - Dealer ${dealerTally}`);
    let deck = createDeck();

    let player = "";
    let dealer = "";
    [player, dealer, deck] = dealCards(deck);

    displayCards("Player", player);
    displayCards("Dealer", dealer.slice(0, 1));

    [player, deck] = playerTurn(player, deck);
    if (!busted(player)) {
      [dealer, deck] = dealerTurn(dealer, deck);
    }
    let winner = detectWinner(player, dealer);
    displayWinner(winner);
    if (winner === NAMES.player) playerTally += 1;
    if (winner === NAMES.dealer) dealerTally += 1;

    prompt();
  }

  if (playerTally === GAMES_TO_WIN) {
    prompt("Congratulations you won the match!");
  } else if (dealerTally === GAMES_TO_WIN) {
    prompt("Dealer wins the match :(");
  }

  let rematch = getAnswer('Would you like a rematch? (y or n)', YES_NO_OPTIONS);
  if (rematch === 'y') continue;
  if (rematch === 'n') {
    prompt(`Thanks for playing ${HIGHEST_SCORE}!`);
    break;
  }
}