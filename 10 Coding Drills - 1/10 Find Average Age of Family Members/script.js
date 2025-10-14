const familyMembers = [
    {
        name: "Narsingrao",
        age: 56
    },
    {
        name: "Prakash",
        age: 52
    },
    {
        name: "Priyanshu",
        age: 30
    },
    {
        name: "Ashish",
        age: 27
    }
];

const totalAge = familyMembers.reduce((acc, cur) => acc + cur.age, 0);
const averageAge = totalAge / familyMembers.length;
console.log(averageAge);