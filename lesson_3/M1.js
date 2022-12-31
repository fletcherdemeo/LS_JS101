// Question 1
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the
// days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock!
// 10 times, with each line indented 1 space to the right of the line above it.
// The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    ...

// str = 'The Flintstones Rock!';
// for (let iter = 0; iter < 10; iter++) {
//   console.log(`${' '.repeat(iter)}${str}`);
// }

// // Question 2
// // Starting with the string:
// let munstersDescription = "The Munsters are creepy and spooky.";

// // Return a new string that swaps the case of all of the letters:
// // `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
// const UPPERCASE = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// let newStr = munstersDescription.split('').map(el => 
//   UPPERCASE.includes(el) ? 
//   el.toLowerCase() : 
//   el.toUpperCase()
// ).join('');
// console.log(newStr);

// Question 3
// Alan wrote the following function, which was intended to return all of the
// factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// Alyssa noticed that this code would fail when the input is 0 or a negative
// number, and asked Alan to change the loop. How can he make this work
// without using a do/while loop? Note that we're not looking to find the
// factors for 0 or negative numbers, but we want to handle it gracefully instead
// of raising an exception or going into an infinite loop.

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  };
  return factors;
}

// By changing the do while to a while loop then we can test for divisor > 0 condition.
// This will return empty arrays when a number less than 0 is passed to the function.

// Bonus: What is the purpose of number % divisor === 0 in that code?
// The % (modulo) operator returns the numbers after decimal point of a division operation
// (i.e. 5 / 2 = 2.5, 5 % 2 = 5). In this function the === 0 is testing whetehr or not the
// number divided by divisor results in a round number or not. Round numbers indicate that
// the divisor is a factor of the number.

// Question 4
// Alyssa was asked to write an implementation of a rolling buffer. You can add and remove
// elements from a rolling buffer. However, once the buffer becomes full, any new elements
// will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. In 
// presenting the code to her team leader, she said "Take your pick. Do you prefer push()
// or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she used to
// add an element to the buffer? You may assume that newElement will always be a primitive
// value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Yes there is a difference in these implementations:
// 1. the push() method mutates the object (array) that it is performing the operation on. 
//    - Because arrays are mutable objects and the buffer argument within the function 
//      points to the same object as the parameter that is being passed to it, the buffer
//      parameter will be mutated to include the newElement
// 2. the concat() method returns a NEW object (array).
//    - Because the buffer variable is being reassigned on line 99 it is shadowing the buffer
//      argument that is being declared on line 98 (this is a variable declaration with the
//      value of the parameter that is being passed to it). Because the concat method
//      returns a new array any changes/mutations that we make to the buffer variable will 
//      now be confined to the locally scoped variable defined on line 99.

// Question 5
// What will the following two lines of code output?

console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // true

// This actuallys logs:
// 0.8999999999999999
// false

// Most floating point representations used on computers lack a certain amount
// of precision, and that can yield unexpected results like these.
