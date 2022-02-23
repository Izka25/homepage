console.log("Cześć to już raz było robione ale cóz😅");

const button = document.querySelector(".button");
const photo = document.querySelector(".photo");

button.addEventListener("click", () => {
    photo.classList.toggle("hidden");
    button.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";
});



let button2 = document.querySelector(".button2");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button2.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = " ciemny"; 
    }
});