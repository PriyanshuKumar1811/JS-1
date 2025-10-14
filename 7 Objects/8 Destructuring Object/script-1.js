let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);


let obj = {
    userName: "Prakash",
    address: {
        state: "Jharkhand",
        city: "Ranchi",
        locality: "Rani Bagh"
    },
    courses: ["HTML", "CSS", "JS", "ReactJs"]
};

var {userName, address, courses} = obj;
console.log(userName);
console.log(address);
console.log(courses);


var {userName, ...rest} = obj;
console.log(userName);
console.log(rest);


var {userName: userName, address: userAddress,} = obj;
console.log(userName);
console.log(userAddress);


var {address: {city}} = obj;
console.log(city);


var {userName, address: {state, city, locality}, courses} = obj;
console.log(city);