const username = "Prakash";
try {
    someFunction();
    console.log("hey there");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("finally executed");
}
console.log(username);