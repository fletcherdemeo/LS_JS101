// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.

// 1. Split string to get individual characters in array
// 2. Update function to include a counter that is increased for every letter
// 3. Uppercase letter when count is even
// 4. Lowercase letter when count is odd
// 5. Return joined array as string

function staggeredCase(str, excludeNonAlpha=true) {
  let letterCount = 0;

  return str.split('')
    .map((char, ind) => {
      if (excludeNonAlpha) {
        if (char.search(/[a-z]/gi) !== -1) {
          letterCount += 1;
          return letterCount % 2 !== 0 ? char.toUpperCase() : char.toLowerCase();
        }
        return char
      } else {
        return ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);