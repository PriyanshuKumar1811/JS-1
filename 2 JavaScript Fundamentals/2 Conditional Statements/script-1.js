const isLoggedIn = true;
if (isLoggedIn) {
  console.log("You are logged in.");
}

const readlineSync = require("readline-sync");

const userAge = readlineSync.question("How old are you? ");
if (userAge > 16) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

const number = Number(readlineSync.question("Enter a number: "));
const remainderAfterDivisionByThree = number % 3;
const remainderAfterDivisionByFive = number % 5;
if (remainderAfterDivisionByThree === 0) {
    console.log("Fizz");
}
if (remainderAfterDivisionByFive === 0) {
    console.log("Buzz");
}