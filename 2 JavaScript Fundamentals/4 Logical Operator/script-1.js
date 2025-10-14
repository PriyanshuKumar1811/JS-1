const physics = 90;
const maths = 95;
const chemistry = 88;
const biology = 96;

if (physics > 85 && maths > 85 && chemistry > 85) {
    console.log("You are eligible for engineering.");
} else {
    console.log("You are not eligible for engineering.");
}

if (physics > 90 || maths > 85 || chemistry > 89) {
    console.log("You are eligible for engineering.");
} else {
    console.log("You are not eligible for engineering.");
}

const isStudentEligible = false;

if (!isStudentEligible) {
    console.log("You are not eligible.");
} else {
    console.log("You are eligible.");
}