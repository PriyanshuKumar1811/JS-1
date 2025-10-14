const arr = [1, 2, 3, 4, 5];

function square(arr) {
    let temp = [];
    for (let number of arr) {
        temp.push(number ** 2);
    }
    return temp;
}

function cube(arr) {
    let temp = [];
    for (let number of arr) {
        temp.push(number ** 3);
    }
    return temp;
}

const output = square(arr);
console.log(output);

const result = cube(arr);
console.log(result);