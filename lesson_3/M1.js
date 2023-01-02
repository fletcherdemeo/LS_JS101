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

// // Question 4
// // Alyssa was asked to write an implementation of a rolling buffer. You can add and remove
// // elements from a rolling buffer. However, once the buffer becomes full, any new elements
// // will displace the oldest elements in the buffer.

// // She wrote two implementations of the code for adding elements to the buffer. In 
// // presenting the code to her team leader, she said "Take your pick. Do you prefer push()
// // or concat() for modifying the buffer?".

// // Is there a difference between these implementations, other than the method she used to
// // add an element to the buffer? You may assume that newElement will always be a primitive
// // value.

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

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

// console.log(0.3 + 0.6); // 0.9
// console.log(0.3 + 0.6 === 0.9); // true

// This actuallys logs:
// 0.8999999999999999
// false

// Most floating point representations used on computers lack a certain amount
// of precision, and that can yield unexpected results like these.

// Question 6
// What do you think the following code will output?

// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// This will log false as NaN !== NaN. NaN values can be tested using the
// Number.isNaN() method which returns a boolean value. The Number.isNan() method
// is more robust than the global isNaN() method.

// // Question 7
// // What is the output of the following code?

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

// // 34 - primitive values can be considered as pass by value (a copy is made in memory)
// // - thus someNumber and answer do not point to the same object in memory

// // Question 8
// // One day, Spot was playing with the Munster family's home computer, and he
// // wrote a small program to mess with their demographic data:

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// // After writing this function, he typed the following code:
// messWithDemographics(munsters);
// console.log(munsters);

// // Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the
// // family's data get ransacked? Why or why not?

// // This code would mutate the data - the Object.values() function returns an array
// // of the objects elements and is the equivalent of a for.. in loop.  

// // Question 9
// // Function and method calls can take expressions as arguments. Suppose we define
// // a function named rps as follows, which follows the classic rules of the 
// // rock-paper-scissors game, but with a slight twist: in the event of a tie, it
// // just returns the choice made by both players.

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// // What does the following code output?
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// // // 
// // paper, rock
// // paper, rock
// // paper

// Question 10
// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

// return 'no'
// bar(foo()) is equivalent to bar('yes')
// bar('yes') will return no

