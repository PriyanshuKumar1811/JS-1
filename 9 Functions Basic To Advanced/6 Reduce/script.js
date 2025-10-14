const arr = [1, 2, 3, 4, 5];

const reducerFunction = (acc, cur) => acc + cur;

const output = arr.reduce(reducerFunction, 0);
console.log(output);

/*
    0 + 1 = 1   --> acc
    1 + 2 = 3   --> acc
    3 + 3 = 6   --> acc
    6 + 4 = 10  --> acc
    10 + 5 = 15 --> acc
*/