const obj = {
    name: "Prakash Sakari",
    greetMessage: function() {
        console.log("Hello Prakash Welcome to GeeksForGeeks");
    },
    greet() {
        console.log("Hello GeeksForGeeks");
    }
};

console.log(obj);
console.log(obj.greetMessage);
console.log(obj.greet);
obj.greetMessage();
obj.greet();