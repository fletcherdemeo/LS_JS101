// Using the multiply() function from the "Multiplying Two Numbers" 
// problem, write a function that computes the square of its argument 
// (the square is the result of multiplying a number by itself).

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

function power(num, n) {
  if (n >= 2) {
    let counter = 2;
    let prevNum = num;
    while (counter <= n) {
      prevNum = multiply(prevNum, num);
      counter += 1;
    }
    return prevNum;  
  } else if (n === 1) {
    return num;
  } else if (n === 0) {
    return 1
  }
}

console.log(power(5, 0)); // logs true
console.log(power(2, 3)); // logs true