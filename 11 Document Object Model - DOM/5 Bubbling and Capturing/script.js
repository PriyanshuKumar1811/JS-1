let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

// Bubbling

para.addEventListener("click", () => {
    alert("para tag");
});

div.addEventListener("click", () => {
    alert("div tag");
});

form.addEventListener("click", () => {
    alert("form tag");
});


// Capturing

para.addEventListener("click", () => {
    alert("para tag");
}, true);

div.addEventListener("click", () => {
    alert("div tag");
}, true);

form.addEventListener("click", () => {
    alert("form tag");
}, true);