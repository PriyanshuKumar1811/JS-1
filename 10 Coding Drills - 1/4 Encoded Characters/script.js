/*
    Generate Secret Code from a given String.
    Input --> prakash
    Encode By Chars --> 2
    Output --> rtcmcuj
*/


const inputStr = "prakash";

const getEncodedStr = str => {
    let encodedStr = "";
    let currentPos = 0, newPos = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        currentPos = str.charCodeAt(i);
        newPos = currentPos + 2;
        encodedStr = encodedStr + String.fromCharCode(newPos);
    }
    return encodedStr;
}
console.log(getEncodedStr(inputStr));