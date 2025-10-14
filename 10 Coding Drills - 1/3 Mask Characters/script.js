//  Mask the last 4 characters with #


const str = "9341267226";

const maskChar = "#".repeat(4);
const result = str.slice(0, str.length - 4) + maskChar;
console.log(result);