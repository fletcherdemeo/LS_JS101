// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:
// Teddy is 69 years old!

function getRandomAge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let age = getRandomAge(20, 121);
console.log(`Teddy is ${age} years old`);