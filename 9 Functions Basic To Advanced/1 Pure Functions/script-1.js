/*  Pure Function
    -------------

        1. It takes an argument.
        2. It should return something.
        3. For same input you should get the same output.
        4. The result should not be influenced by outer parameter.
        5. It should not mutate the original argument.
*/


function getDoubleValue(number) {
    return number * 2;
}
const result = getDoubleValue(5);
console.log(result);



function appendNumbers(arr) {
    const newArr = [];
    newArr.push(...arr, 5, 6);
    return newArr;
}
const numbers = [1, 2, 3, 4];
const output = appendNumbers(numbers);
console.log(output);    // [1, 2, 3, 4, 5, 6]
console.log(numbers);   // [1, 2, 3, 4] (original array remains unchanged)