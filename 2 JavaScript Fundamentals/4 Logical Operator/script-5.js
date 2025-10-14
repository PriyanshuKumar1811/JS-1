// Nullish Coalescing

var firstName = "Prakash";
console.log(firstName ?? "HiddenGeeks");


var firstName = "";
console.log(firstName ?? "HiddenGeeks");


var firstName = undefined;
console.log(firstName ?? "HiddenGeeks");


var firstName = null;
console.log(firstName ?? "HiddenGeeks");


var a = 0;
console.log(a ?? 1);


var a = 10;
var b;
console.log(a + (b ?? 0));