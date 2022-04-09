{
    const welcome = () => {
        console.log("Cześć to już raz było robione ale cóz😅");
    }
    
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
    init();
    
    
    const removePhotoButton = document.querySelector(".js-removePhotoButton");
    const photo = document.querySelector(".js-photo");
    
    removePhotoButton.addEventListener("click", () => {
        photo.classList.toggle("hidden");
        removePhotoButton.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";
    });
    
    
  
   
    
};