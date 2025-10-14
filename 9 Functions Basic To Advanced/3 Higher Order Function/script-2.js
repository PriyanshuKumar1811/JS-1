function displayMessage() {
    return function() {
        console.log("Hello from the inner function");
    };
}
const output = displayMessage();
output();