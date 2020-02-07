const animalsContainer = document.querySelector(".animals");

const cows = document.querySelector(".cows");

const parrots = document.createElement("li");

parrots.className = "parrots";

const liContent = document.createTextNode("Parrots");

parrots.appendChild(liContent);

animalsContainer.appendChild(parrots);

cows.after(parrots);

