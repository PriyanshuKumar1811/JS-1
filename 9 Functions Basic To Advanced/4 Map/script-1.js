const arr = [1, 2, 3, 4, 5];

function getSquares(number) {
    return number ** 2;
}

function squareNumbers(arr) {
    const tempArr = [];
    for (let number of arr) {
        tempArr.push(getSquares(number));
    }
    return tempArr;
}
const result = squareNumbers(arr);
console.log(result);