const parentElement = document.getElementById("parent-container");

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container", "d-flex");

// Creating Card Image Element

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src", "travel.jpg");
cardImageElement.setAttribute("alt", "travel-card");
cardImageElement.setAttribute("width", "200px");

// Creating Card Text Element

const cardTextElement = document.createElement("span");
cardTextElement.innerText = "The Journey of a thousand miles begins with a single step.";

parentElement.appendChild(cardContainer);
cardContainer.appendChild(cardImageElement);
cardContainer.appendChild(cardTextElement);