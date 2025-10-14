function greetMessage() {
    function wrapper() {
        let name = "Prakash";
        console.log(name, "Welcome to GeeksForGeeks");
    }
    return wrapper;
}
const output = greetMessage();
output();
greetMessage()();