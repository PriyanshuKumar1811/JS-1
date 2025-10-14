const findCharacter = (text, char) => text.indexOf(char) === -1 ? "char not found" : "char found";

const result = findCharacter("Hello GeeksForGeeks", "H");
console.log(result);