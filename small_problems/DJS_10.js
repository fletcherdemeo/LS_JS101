// Neutralizer
// We wrote a neutralize function that removes negative words from sentences.
// However, it fails to remove all of them. What does happen? How would you fix
// this problem?

function neutralize(sentence) {
  let words = sentence.split(" ");
  let newWords = [];

  words.forEach(word => {
    if (!isNegative(word)) {
      newWords.push(word);
    }
  });
  return newWords.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);