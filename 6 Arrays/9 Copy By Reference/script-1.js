// Copying an Array --> Array Reference
// Shallow Copy

let arr1 = [1, 2, 3];  // Is referring to Memory Location - @450
let arr2 = arr1;       // Is also pointing / referring to the same memory location

console.log("arr1 -", arr1);
console.log("arr2 -", arr2);
arr2.push(4);
console.log("Updated arr1 -", arr1);
console.log("Updated arr2 -", arr2);


// Spread Operator

let arr3 = [...arr1];
console.log("arr3 -", arr3);
arr3.push(5);
console.log("Updated arr1 -", arr1);
console.log("Updated arr3 -", arr3);