// Keyword	Meaning
// START	start of the program
// SET	set a variable that we can use for later
// GET	retrieve input from user
// PRINT	display output to user
// READ	retrieve a value from a variable
// IF/ELSE IF/ELSE	show conditional branches in logic
// WHILE	show looping logic
// END	end of the program

// a function that returns the sum of two numbers

// get two numbers (number 1 & number 2)
// return number 1 plus number 2

// START
// GET two numbers, number1 & number2
// SET sumValue = number1 + number2
// END

// a function that takes an array of strings, and returns a string that is all those strings concatenated together

// get an array of string values
// create an empty string variable named finalString
// for each string within the array, add that string to the finalString
// return finalString

// START
// GET array of string values
// SET finalString = ""
// SET iterator = 1
// WHILE iterator < length of array
  // SET currentString = value within strings array at iterator index - 1
  // SET finalstring += currentString
  // SET iterator += 1
// END

// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
// everyOther([1,4,7,2,5]); // => [1,7,5]

// get an array of integers
// create an empty array variable named finalArray
// loop through array and get index
  // if index % 2 != 0 then add to finalArray
// return finalArray

// START
// GET array of integers
// SET finalArray
// SET iterator
// WHILE iterator < length of array
  // IF iterator % 2 is not 0
    // SET finalArray += array of integers value at iterator index - 1
    // SET iterator += 1
// END
