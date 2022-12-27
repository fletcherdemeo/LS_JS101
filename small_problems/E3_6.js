// Madlibs is a simple game where you create a story template with "blanks"
// for words. You, or another player, then construct a list of words and place
// them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, 
// and an adjective, and injects them into a story that you create.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

prompt('Enter a noun: ');
let noun = readline.question();
prompt('Enter a verb: ');
let verb = readline.question();
prompt('Enter an adjective: ');
let adjective = readline.question();
prompt('Enter an adverb: ');
let adverb = readline.question();

prompt(`The ${adjective} ${noun} ${verb}s ${adverb} over the moon.`);

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.