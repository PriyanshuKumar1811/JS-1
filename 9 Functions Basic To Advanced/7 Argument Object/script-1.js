/*  Argument Object
    ---------------

        --> Argument Object in Non-Arrow Function.
        --> Argument Object is an array like object present locally inside a function and it contains value
            of all the arguments passed to a function.
*/


function calculateTotal(a, b){
    return a + b;
}
const total = calculateTotal(4, 5, 8, 5, 2, 3);
console.log(total);