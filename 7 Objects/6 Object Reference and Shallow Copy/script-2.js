const person1 = {
    name: "Prakash",
    age: 100,
    address: {
        city: "Ramgarh",
        state: "Jharkhand"
    }
};
const person2 = Object.assign({}, person1);

person2.name = "Ashish";
person2.age = 200;
person2.address.city = "Patna";
person2.address.state = "Bihar";

console.log(person1);
console.log(person2);