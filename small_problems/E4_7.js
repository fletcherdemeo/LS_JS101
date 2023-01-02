// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of "it's"
// is 3, not 4.

function cleanUpString(str) {
  let words = str.toLowerCase()
                 .split(' ')
                 .map(word => word.replace(/[^a-z]/g, ''))
                 .filter(word => word.length > 0);
  return words
}

function wordSizes(str) {
  let words = cleanUpString(str);
  let wordSizes = {};

  words.forEach(word => {
    !wordSizes.hasOwnProperty(word.length) ? 
    wordSizes[word.length] = 1 : 
    wordSizes[word.length] += 1;
  })

  return wordSizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}