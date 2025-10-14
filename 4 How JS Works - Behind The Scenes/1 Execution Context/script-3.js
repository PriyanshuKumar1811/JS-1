console.log("Global Execution Context Starts");

var globalVariable = "I am a global variable";

console.log(globalVariable);
globalFunction();

function globalFunction() {
    console.log("Inside global function");
}

console.log("Global Execution Context Ends");