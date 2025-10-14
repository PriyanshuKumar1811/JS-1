let anonymousFunction = function greetMessage() {
    console.log("Hello from GeeksforGeeks");
    console.log(typeof greetMessage);
};

console.log(typeof anonymousFunction);
anonymousFunction();
// greetMessage();  // Error: greetMessage is not defined