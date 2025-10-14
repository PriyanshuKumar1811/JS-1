const totalMarks = 60;

if (totalMarks < 40) {
    console.log("You need to work hard.");
} else if (totalMarks < 60) {
    console.log("B grade");
} else if (totalMarks < 75) {
    console.log("A grade");
} else if (totalMarks < 85) {
    console.log("A+ grade");
} else {
    console.log("Genius");
}

const result = totalMarks < 40 ? "You need to work hard." :
               totalMarks < 60 ? "B grade" :
               totalMarks < 75 ? "A grade" :
               totalMarks < 85 ? "A+ grade" : "Genius";

console.log(result);