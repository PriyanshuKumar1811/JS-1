const arr = [["HTML", "CSS", "JS"], 1, 2, 3, 4, 5, 6];

const [courses, a, b, ...rest] = arr;

console.log(rest);
console.log(courses);