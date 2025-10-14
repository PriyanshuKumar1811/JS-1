let displayMessage = "Hello GeeksForGeeks";
for (let i = 0; i <= displayMessage.length - 1; i++) {
    if (displayMessage[i] === "F") {
        break;
    } else {
        console.log(displayMessage[i]);
    }
}