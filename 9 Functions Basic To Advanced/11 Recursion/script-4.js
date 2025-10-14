function factorial(number) {
    if (number === 1) {
        return number;
    }
    return factorial(number - 1) * number;
}
const result = factorial(5);
console.log(result);