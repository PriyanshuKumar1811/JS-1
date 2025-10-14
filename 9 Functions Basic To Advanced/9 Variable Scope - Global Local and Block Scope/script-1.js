// Global and Local Variables

var x = 3;

function showNumber() {
    var y = 5;
    console.log({ x });
    console.log({ y });
}

function greetMessage() {
    console.log({ x });
    console.log({ y });
}

showNumber();
console.log({ y });
greetMessage();