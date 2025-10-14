//  Delete all the vowels from a String.


const string = "The quick brown fox jumps over the lazy dog";

function getStrWithNoVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";
    for (let char of str) {
        if (!vowels.includes(char.toLowerCase())) {
            result = result + char;
        }
    }
    return result;
}
const updatedStr = getStrWithNoVowels(string);
console.log(updatedStr);