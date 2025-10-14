// Impure Functions


const x = 5;
function getDoubleValue(number) {
    return number * 2 * x;
}
const result = getDoubleValue(5);
console.log(result);



function appendNumbers(arr) {
    arr.push(5, 6);
    return arr;
}
const numbers = [1, 2, 3, 4];
const output = appendNumbers(numbers);
console.log(output);