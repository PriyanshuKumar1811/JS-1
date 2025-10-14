// Factorial of 5! --> 5 x 4 x 3 x 2 x 1 = 120


function factorial(number) {
    let total = 1;
    for (let i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}
console.log(factorial(5));