console.log("Global Execution Context Starts");

var globalVariable = "I am a global variable";

console.log(globalVariable);
console.log(globalFunction);
globalFunction();

var globalFunction = function() {
    console.log("Inside global function");
}

console.log("Global Execution Context Ends");