// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// input: string
// output: array
// rules:
//      Explicit requirements:
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)
//        - Return ALL palindrome substrings within a string

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty array
//        - if the string contains no palindromes, the result should be an empty array

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// The PEDAC Process

// P: Understanding the Problem
// - Establish the rules/define the boundaries of the problem
//   - Assess available information
//   - Restate explicit requirements
//   - Identify implicit requirements
// - Spend enough time, don't rush this step

// - Questions:
//   - What do we mean by every other word?
//   - How do we define a word in this context?
//     - Words are delimited by spaces

// E: Examples and Test Cases
// - Can confirm/refine assumptions
// - Help to answer questions about implicit requirements
// - Act as assertions which help to codify the rules and boundaries
// - Can use any test cases that you are provided with or create your own examples

// D: Data Structures
// - Help to reason with data more logically
// - Help interact with data at implementation level
// - Thinking in terms of data structures is part of problem solving process
// - Data structures are closely linked to algorithms
//   - Set of steps from input to output
//     - Involves structuring data in a certain way

// A: Algorithms
// - A logical sequence of steps for accomplishing a task or objective
//   - Closely linked to data structures
//   - Series of steps to structure data to produce the required output
// - Stay abstract/high-level
//   - Avoid implementation detail
//   - Don't worry about efficiency for now

// C: Implementing a solution in code




