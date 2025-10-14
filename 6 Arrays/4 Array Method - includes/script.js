const availableSize = ["S", "M", "L", "XL", "XXL", "XXXL"];
const readlineSync = require("readline-sync");
const userSize = readlineSync.question("Which size of shirt do you want (S/M/L/XL/XXL/XXXL) - ");

const isSizeAvailable = availableSize.includes(userSize);
console.log(isSizeAvailable);