// Recursion is a programming term where the function is called from itself.


function calculateSum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total = total + i;
    }
    return total;
}
const result = calculateSum(10);
console.log(result);