const readlineSync = require("readline-sync");

const userName = readlineSync.question("what is your name? ");
const userAge = readlineSync.question("what is your age? ");
console.log(typeof userName);
console.log(typeof userAge);

console.log(userName);
console.log(userAge);