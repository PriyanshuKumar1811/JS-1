/* 
new keyword and constructor functions

Constructor functions technically are regular functions. They have two conventions
1. They are named with capital letter first.
2. They should be executed only with "new" operator.
*/

function User() {
    console.log(this);
    this.name = "Prakash";
    this.age = 100;
}

const user1 = new User();

console.log(user1);
console.log(user1.name);
console.log(user1.age);