function greetMessage(name, city) {
    return {
        name,
        city
    }
}
const student1 = greetMessage("Prakash", "Jharkhand");
console.log(student1);

const student2 = greetMessage("Ashish", "Ramgarh");
console.log(student2);

const student = "Prakash";
const course = "JavaScript";
console.log({student, course});