const readline = require('readline-sync');

let SQMTRS_TO_SQFEET = 10.7639;

console.log("Calculate in meters or feet?");
let measurement = readline.prompt();

console.log("Enter the length of the room in meters:");
let length = parseInt(readline.prompt(), 10);

console.log("Enter the width of the room in meters:");
let width = parseInt(readline.prompt(), 10);

let area = 0;
let altArea = 0;
let altMeasurement = "";
if (measurement === "meters") {
  area = length * width;
  altArea = length * width * SQMTRS_TO_SQFEET;
  altMeasurement = "feet";
} else if (measurement === "feet") {
  area = length * width;
  altArea = length * width / SQMTRS_TO_SQFEET;
  altMeasurement = "meters";
}

console.log(`The area of the room is ${area} square ${measurement} (${altArea} square ${altMeasurement}).`);
