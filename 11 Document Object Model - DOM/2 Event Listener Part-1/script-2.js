let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    console.log("Clicked");
    resetButton.innerText = "Pause";
});