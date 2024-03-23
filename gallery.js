let arrayOfImages = ["food1","food2","food3","food4","food5","food6","food7","food8","food9","food10","food11","food12","food13","food14","food15","food16","food17","food18","food19","food20","food21",]

let mainImage = document.getElementsByClassName("mainImage")[0];
let leftMainArrow = document.getElementsByClassName("fa-solid fa-chevron-left")[0];
let rightMainArrow = document.getElementsByClassName("fa-solid fa-chevron-right")[0];
let galleryImages = document.getElementsByClassName('galleryImages');

for (const galleryImage of galleryImages) {
    galleryImage.addEventListener("click", (event) =>{
        let mainIMG = document.getElementById('mainImage')
        document.getElementById("chosen").setAttribute("id", "");
        galleryImage.setAttribute("id", "chosen");
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/${galleryImage.alt}.jpg" alt="${galleryImage.alt}"></img>`);
    })
}

leftMainArrow.addEventListener("click", (event) =>{
    let mainIMG = document.getElementById('mainImage')
    let newAlt = arrayOfImages.indexOf(mainIMG.alt)
    if (newAlt-1<0) {
        newAlt = arrayOfImages.length-1;
        console.log(newAlt);
    }
    mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
    document.getElementById("chosen").setAttribute("id", "");
    galleryNewAlt = newAlt-1;
    galleryImages[galleryNewAlt].setAttribute("id", "chosen");
})

rightMainArrow.addEventListener("click", (event) =>{
    let mainIMG = document.getElementById('mainImage')
    let newAlt = arrayOfImages.indexOf(mainIMG.alt)+2;
    if (newAlt-1>19) {
        newAlt = 1;
        console.log(newAlt);
    }
    mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
    document.getElementById("chosen").setAttribute("id", "");
    galleryNewAlt = newAlt-1;
    galleryImages[galleryNewAlt].setAttribute("id", "chosen");
})