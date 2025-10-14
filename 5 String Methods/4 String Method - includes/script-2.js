const displayMessage = "Hello GeeksForGeeks";
const vowels = "aeiou";

for (let char of displayMessage) {
    if (vowels.includes(char)) {
        console.log(`${char} is a vowel`);
    }
}