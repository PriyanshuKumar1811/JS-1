function greet(userName) {
    return `Hello ${userName}`;
}

function print(value) {
    console.log(value);
}

print(greet("Prakash"));

module.exports = {
    greet,
    print
}