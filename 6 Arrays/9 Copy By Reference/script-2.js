let arr4 = [1, 2, 3, 4];
let arr5 = [];

for (let number of arr4) {
    arr5.push(number);
}
console.log("arr4 -", arr4);
console.log("arr5 -", arr5);
arr5.push(5);
console.log("Updated arr4 -", arr4);
console.log("Updated arr5 -", arr5);