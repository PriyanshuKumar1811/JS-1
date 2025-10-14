function wrapper() {
    return "Welcome to GeeksForGeeks";
}

function greetMessage(inner, name) {
    console.log(name, inner());
}

greetMessage(wrapper, "Prakash");