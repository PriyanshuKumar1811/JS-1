function findCharacter(text, char) {

    const index = text.indexOf(char);
    if (index === -1) {
        return "Character not found";
    } else {
        return "Character found in the string";
    }
}

const result = findCharacter("Hello GeeksForGeeks", "H");
console.log(result);