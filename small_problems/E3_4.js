// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// such that the first two numbers are 1 by definition, and each subsequent 
// number is the sum of the two previous numbers. Fibonacci numbers often 
// appear in mathematics and nature.

// Computationally, the Fibonacci series is a simple series, but the results 
// grow at an incredibly rapid rate. For example, the 100th Fibonacci number 
// is 354,224,848,179,261,915,075—that's enormous, especially considering that 
// it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first 
// Fibonacci number that has the number of digits specified by the argument. 
// (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal
// to 2

function findFibonacciIndexByLength(numOfDigits) {
  let fibonacciNums = [1n, 1n];

  // Loop through fibonacciNums array, add the last two elements to get the
  // current fibonacci number and push to the fibonacciNums array. 
  // Exit out of the loop once the length of the stringified fibonacci number
  // is equal to the numOfDigits argument specified.  
  while (true) {
    let fibonacci = (
      fibonacciNums[fibonacciNums.length - 1] + 
      fibonacciNums[fibonacciNums.length - 2]
    );
    fibonacciNums.push(fibonacci);

    if (fibonacci.toString().length >= numOfDigits) break;
  }

  return BigInt(fibonacciNums.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.