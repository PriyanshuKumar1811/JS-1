const str = "prakash";

function getReversedStr(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
}
const result = getReversedStr(str);
console.log(result);