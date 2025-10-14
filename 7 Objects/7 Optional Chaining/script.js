const user = {
    name: "Prakash",
    age: 100,
    address: {
        street: "Bhurkunda",
        city: "Ranchi"
    },
    getDisplayMessage: function() {
        console.log("Welcome Prakash");
    }
};
console.log(user.address.city);


if (user.address !== undefined) {
    console.log(user.address.city);
} else {
    console.log("address not found");
}
console.log(user.address?.city);


user.getDisplayMessage();
console.log(user.getDisplayAddress?.());