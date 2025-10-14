// A program that reads three string and print the smallest string.

const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

const lengthOfFirstString = firstString.length;
const lengthOfSecondString = secondString.length;
const lengthOfThirdString = thirdString.length;

if (lengthOfFirstString < lengthOfSecondString && lengthOfFirstString < lengthOfThirdString) {
    console.log(`${firstString} is the smallest string`);
} else if (lengthOfSecondString < lengthOfFirstString && lengthOfSecondString < lengthOfThirdString) {
    console.log(`${secondString} is the smallest string`);
} else if (lengthOfThirdString < lengthOfFirstString && lengthOfThirdString < lengthOfSecondString) {
    console.log(`${thirdString} is the smallest string`);
} else {
    console.log("Found 2 or more strings of the same length");
}