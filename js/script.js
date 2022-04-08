console.log("Cześć to już raz było robione ale cóz😅");

const removePhotoButton = document.querySelector(".js-removePhotoButton");
const photo = document.querySelector(".js-photo");

removePhotoButton.addEventListener("click", () => {
    photo.classList.toggle("hidden");
    removePhotoButton.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";
});



let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = " ciemny"; 
    }
});