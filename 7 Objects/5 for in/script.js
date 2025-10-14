const obj = {
    name: "Prakash",
    city: "Ramgarh"
};
const isPropertyFound = "age" in obj;
console.log(isPropertyFound);

for (let key in obj) {
    console.log(key, obj[key]);
}