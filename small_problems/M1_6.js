// The Fibonacci series is a sequence of numbers in which each number is the
// sum of the previous two numbers. The first two Fibonacci numbers are 1 and
// 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 
// 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// This simple sequence can be computed using a recursive function. A recursive
// function is one in which the function calls itself. For example, the following
// function is a recursive function that computes the sum of all integers
// between 1 and n:

// function sum(num) {
//   if ( num === 1) {
//     return 1;
//   }
//   return num + sum(num - 1);
// }

// A good recursive function has three primary qualities:

// It calls itself at least once.
// It has an ending condition — e.g., if (num === 1), in the sum function above.
// The results of each recursion are used in each step — e.g., num + sum(num - 1)
// uses sum(num - 1).
// Write a recursive function that computes the nth Fibonacci number, where nth is
// an argument passed to the function.

// NOTE: This exercise verges on the Advanced level of exercises, so do not be
// discouraged if you are not able to solve it on your own; recursion is tricky,
// and even experienced developers can have difficulty dealing with it.

// Examples and test cases
// 1. fib (5) = fib (4) + fib (3) => fib (n) = fib (n - 1) + fib (n - 2)
// 2. fib (4) = fib (3) + fib (2)
// 3. fib (3) = fib (2) + fib (1)
// 4. fib (2) = fib (1) + fib (0)
// 5. fib (1) = 1

// Algorithm
// 1. If fib number is 0 then return 0
// 2. If fib number is 1 then return 1
// 2. If fib number is > 1 then add last two fib nums together to get current 
//    fib number

// Code

function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
}

// Examples:

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(35));      // 6765