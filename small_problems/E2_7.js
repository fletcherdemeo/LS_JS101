// The || operator returns a truthy value if either or both of its operands are truthy, 
// a falsey value if both operands are falsey. The && operator returns a truthy value 
// if both of its operands are truthy, and a falsey value if either operand is falsey. 
// This works great until you need only one, but not both, of two conditions to be truthy: 
// the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and 
// returns true if exactly one of its arguments is truthy, false otherwise. Note that we 
// are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// IF ARG1 === false && ARG2 === true RETURN true
// IF ARG1 === true && ARG2 === false RETURN true

function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    console.log(arg1)
    console.log(arg2)
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);