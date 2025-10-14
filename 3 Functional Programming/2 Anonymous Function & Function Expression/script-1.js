// anonymousFunction();  // Error: Cannot access 'anonymousFunction' before initialization

let anonymousFunction = function() {
    console.log("Hello from GeeksforGeeks");
};

console.log(typeof anonymousFunction);
console.log(anonymousFunction);
anonymousFunction();