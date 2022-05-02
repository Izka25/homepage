{
    const welcome = () => {
        console.log("Cześć to już raz było robione ale cóz😅");
    }
    const removeButton = () => {

        const photo = document.querySelector(".js-photo");
        const removePhotoButton = document.querySelector(".js-removePhotoButton");
        photo.classList.toggle("hidden");
        removePhotoButton.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";
    };

    const remove = () => {
        const removePhotoButton = document.querySelector(".js-removePhotoButton");

        removePhotoButton.addEventListener("click", removeButton);

    };

    const buttonClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = " ciemny";
        }
    }

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", buttonClick);
    };

    welcome();
    remove();
    init();

};