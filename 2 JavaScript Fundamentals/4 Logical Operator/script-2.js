/*
Logical Operator with truthy and falsy values.
1. AND &&
2. OR ||

Truthy Values - non empty string including space.
Falsy Values  - ("") empty string, 0, null, undefined.
Short Circuiting
*/

var firstName = "";
var nickName = "Prakash";
console.log(firstName || nickName);
var userName = firstName || nickName;
console.log(userName);


var firstName = "Priyanshu";
var nickName = "";
var userName = firstName || nickName;
console.log(userName);


var firstName = undefined;
var nickName = null;
var userName = firstName || nickName;
console.log(userName);


var a = 10;
var b;
console.log(a + (b || 0));


var a = 10;
var b = 5;
console.log(a + (b || 0));