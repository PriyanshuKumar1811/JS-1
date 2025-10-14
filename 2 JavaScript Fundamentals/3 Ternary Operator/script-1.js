const totalMarks = 60;

if (totalMarks < 40) {
    console.log("You need to work hard.");
} else {
    console.log("You cleared the exam.");
}

console.log(totalMarks < 40 ? "You need to work hard." : "You cleared the exam.");

const result = totalMarks < 40 ? "You need to work hard." : "You cleared the exam.";
console.log(result);