const inputString = "Hello GeeksForGeeks";
const vowel = "aeiou";
for (let i = 0; i <= inputString.length - 1; i++) {
    if (vowel.includes(inputString[i])) {
        console.log(`${inputString[i]} is a vowel`);
    } else {
        console.log(`${inputString[i]} is not a vowel`);
    }
}