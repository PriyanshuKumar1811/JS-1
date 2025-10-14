let beginButton = document.querySelector(".begin");

beginButton.addEventListener("click", () => {
    if (beginButton.innerText === "Begin") {
        beginButton.innerText = "Final";
        beginButton.innerHTML = '<span>Destination</span>';
    } else {
        beginButton.innerText = "Begin";
    }
});