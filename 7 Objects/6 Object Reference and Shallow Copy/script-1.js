const person1 = {
    name: "Prakash",
    age: 100
};
const person2 = person1;

person2.name = "Ashish";
person1.age = 200;

console.log(person1);
console.log(person2);