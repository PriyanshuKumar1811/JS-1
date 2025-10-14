// Implicit Binding
// Explicit Binding

const user1 = {
    name: "Prakash",
    age: 50,
    displayMessage() {
        console.log(this.age);
    }
};
user1.displayMessage();

const user2 = {
    name: "Priyanshu",
    age: 75,
    displayMessage() {
        console.log(this.age);
    }
};

const user3 = {
    name: "Ashish",
    age: 100,
    displayMessage() {
        console.log(this.age);
    }
};

function greet(degree, year) {
    console.log(this.name, degree, year);
}

greet.call(user1, "BTECH-CE", 2027);  // the value of this is user1
greet.call(user2, "BTECH-CS", 2027);  // the value of this is user2

greet.apply(user1, ["BTECH-CE", 2027]);
greet.apply(user2, ["BTECH-CS", 2027]);

const result = greet.bind(user3, "BTECH-CHE");
result(2027);