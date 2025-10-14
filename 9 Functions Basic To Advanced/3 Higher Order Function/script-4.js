const arr = [1, 2, 3, 4, 5];

function square(number) {
    return number ** 2;
}

function cube(number) {
    return number ** 3;
}

function calculatePower(wrapper, arr) {
    const temp = [];
    for (let number of arr) {
        temp.push(wrapper(number));
    }
    return temp;
}

const squareOfNumbers = calculatePower(square, arr);
console.log(squareOfNumbers);

const cubeOfNumbers = calculatePower(cube, arr);
console.log(cubeOfNumbers);