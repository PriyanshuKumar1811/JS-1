// Objects --> {key: value}
// Object Literal

const obj = {};
console.log(typeof obj);


const person = {
    name: "Prakash",  // Property
    age: 100,
    job: "Mentor",
    course: ["HTML", "CSS", "JS", "ReactJs"],
    "is Admin": "true"
};
console.log(person);

console.log(person.name);
console.log(person.age);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["is Admin"]);


person.city = 'New York';  // Adding a new property
person.age = 200;          // Modifying an existing property
console.log(person.city);
console.log(person.age);

console.log(person);


delete person.job;
console.log(person.job);
console.log(person);