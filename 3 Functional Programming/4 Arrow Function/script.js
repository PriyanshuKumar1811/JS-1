let calculateSum = function(x, y) {
    return x + y;
};
console.log(calculateSum(10, 15));


let sum = (x, y) => {
    return x + y;
};
console.log(sum(10, 25));


let greet = (x, y) => x + y;
console.log(greet(20, 25));


const greetMessage = (x, y) => x > y ? x + y : x - y;
const output = greetMessage(10, 5);
console.log(output);