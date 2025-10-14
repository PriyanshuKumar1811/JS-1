function wrapper() {
    return "Welcome to GeeksForGeeks";
}

function greetMessage(wrapper, name) {
    console.log(name, wrapper());
}

greetMessage(wrapper, "Prakash");