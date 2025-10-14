function calculateSum(number) {
    if (number === 1) {
        return number;
    }
    return calculateSum(number - 1) + number;
}
const result = calculateSum(10);
console.log(result);