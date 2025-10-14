// Hoisting is a process whereby you can access the value of a variable or a function even before it is 
// initialized.

console.log(age);
var age = 100;

console.log(userName);
userName();

function userName() {
    console.log("Prakash Sakari");
}