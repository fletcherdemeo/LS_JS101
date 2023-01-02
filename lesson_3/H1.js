// // Question 1
// // Will the following functions return the same results?

// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());

// The functions will not return the same results as the object needs to be on
// the same line as the return statement 

// // Question 2
// // What does the last line in the following code output?

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); //  => "{first: [1, 2]}" 

// // Question 3
// // Given the following similar sets of code, what will each code snippet print?

// // A).

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //  => ["one"]
// console.log(`two is: ${two}`); //  => ["two"]
// console.log(`three is: ${three}`); //  => ["three"]

// // The code will log ["one"], ["two"] and ["three"] because the reassignments
// // that occur on lines 37-39 are being done on the locally scoped one, two
// // and three variables. 

// // B). 

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //  => ["one"]
// console.log(`two is: ${two}`); //  => ["two"]
// console.log(`three is: ${three}`); //  => ["three"]

// // The code will log ["one"], ["two"] and ["three"] because the reassignments
// // that occur on lines 61-63 are being done on the locally scoped one, two
// // and three variables. 

// // C). 

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //  => ["two"]
// console.log(`two is: ${two}`); //  => ["three"]
// console.log(`three is: ${three}`); //  => ["one"]

// // The code will log ["two"], ["three"] and ["one"] because the splice method
// // used on lines 83-85 is a mutating method that will mutate the arrays that are
// // being passed to the messWithVars function as they are being passed by reference.

// // Question 4
// // Ben was tasked to write a simple JavaScript function to determine whether an
// // input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11.
// // He is not familiar with regular expressions.

// // Alyssa supplied Ben with a function named isAnIpNumber. It determines whether
// // a string is a numeric string between 0 and 255 as required for IP numbers
// // and asked Ben to use it. Here's the code that Ben wrote:

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");

//   if (dotSeparatedWords.length !== 4) {
//     return false;
//   }
//   return dotSeparatedWords.every(isAnIpNumber);
// }

// // Alyssa reviewed Ben's code and said, "It's a good start, but you missed a
// // few things. You're not returning a false condition, and you're not handling
// // the case when the input string has more or less than 4 components, e.g., 
// // 4.5.5 or 1.2.3.4.5: both those values should be invalid."

// // Help Ben fix his code.

// console.log(isDotSeparatedIpAddress('4.5.5'));
// console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
// console.log(isDotSeparatedIpAddress('10.4.5.11'));
// console.log(isDotSeparatedIpAddress('280.4.5.11'));