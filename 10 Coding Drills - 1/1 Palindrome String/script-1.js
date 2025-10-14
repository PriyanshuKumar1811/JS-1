const str = "prakash";

const arrOfChar = str.split("");
const reversedChar = arrOfChar.reverse();
const reversedStr = reversedChar.join("");
console.log(reversedStr);

if (str === reversedStr) {
    console.log("String is a Palindrome");
} else {
    console.log("String is not a Palindrome");
}


/* ---------------------------------------- */


const input = "prakash";

const reverse = str.split("").reverse().join("");
console.log(reverse);