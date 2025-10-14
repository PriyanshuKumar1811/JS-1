// this keyword refers to the object that is executing the function.

const obj = {
    name: "Prakash",
    displayMessage: function() {
        console.log(this);  // Implicit Binding
        console.log(this.name);
    }
};
obj.displayMessage();
console.log(obj);


function calculateSum() {
    console.log(this);
}
calculateSum();
console.log(this);


window.alert("hello");
this.alert("priyanshu");