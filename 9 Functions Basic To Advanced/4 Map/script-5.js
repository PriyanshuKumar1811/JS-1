const arr = [1, 2, 3, 4, 5];

const squareNumbers = arr.map((number, index) => {
    console.log(index);
    return number ** 2;
});
console.log(squareNumbers);