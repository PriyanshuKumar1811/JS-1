function calculateTotal() {
    console.log(arguments);
    console.log(arguments[0]);
    arguments[0] = 9;
    console.log(arguments);

    for (let value of arguments) {
        console.log(value);
    }

    let sum = 0;
    for (let value of arguments) {
        sum += value;
    }
    console.log(sum);

    console.log(arguments.length);

    const arr = [...arguments];
    console.log(arr);
}

calculateTotal(4, 5, 8, 5, 2, 3);