let arrayOfImages = ["food1","food2","food3","food4","food5","food6","food7","food8","food9","food10","food11","food12","food13","food14","food15","food16","food17","food18","food19","food20","food21",]

let mainImage = document.getElementsByClassName("mainImage")[0];
let leftMainArrow = document.getElementsByClassName("fa-solid fa-chevron-left")[0];
let rightMainArrow = document.getElementsByClassName("fa-solid fa-chevron-right")[0];
let galleryImages = document.getElementsByClassName('galleryImages');
function newGallery() {
    galleryImages = document.getElementsByClassName('galleryImages');
    
    for (const galleryImage of galleryImages) {
        galleryImage.addEventListener("click", (event) =>{
            let mainIMG = document.getElementById('mainImage')
            document.getElementById("chosen").setAttribute("id", "");
            galleryImage.setAttribute("id", "chosen");
            mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/${galleryImage.alt}.jpg" alt="${galleryImage.alt}"></img>`);
        })
    }
}
newGallery();

leftMainArrow.addEventListener("click", (event) =>{
    let mainIMG = document.getElementById('mainImage');
    let newAlt = arrayOfImages.indexOf(mainIMG.alt);

    let galleryPage = document.getElementById("page");
    if (galleryPage.innerText[0] < galleryPage.innerText[2]) {
        if (newAlt-1<0) {
            newAlt = 20;
        }
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
        document.getElementById("chosen").setAttribute("id", "");
        galleryNewAlt = newAlt-1;
        galleryImages[galleryNewAlt].setAttribute("id", "chosen");
    }
    else{
        if (newAlt-1<21) {
            newAlt = arrayOfImages.length;
        }
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
        document.getElementById("chosen").setAttribute("id", "");
        galleryNewAlt = newAlt-21;
        galleryImages[galleryNewAlt].setAttribute("id", "chosen");
    }
})

rightMainArrow.addEventListener("click", (event) =>{
    let mainIMG = document.getElementById('mainImage');
    let newAlt = arrayOfImages.indexOf(mainIMG.alt)+2;
    let galleryPage = document.getElementById("page");
    if (galleryPage.innerText[0] < galleryPage.innerText[2]) {
        if (newAlt-1>19) {
            newAlt = 1;
        }
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
        document.getElementById("chosen").setAttribute("id", "");
        galleryNewAlt = newAlt-1;
        galleryImages[galleryNewAlt].setAttribute("id", "chosen");
    }
    else{
        if (newAlt==arrayOfImages.length+1) {
            newAlt = 21;
        }
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
        document.getElementById("chosen").setAttribute("id", "");
        galleryNewAlt = newAlt-21;
        galleryImages[galleryNewAlt].setAttribute("id", "chosen");
    }
})

let imagesElement = document.getElementsByClassName("images")[0];
let leftArrow = document.getElementsByClassName("fa-solid fa-chevron-left")[1];
let rightArrow = document.getElementsByClassName("fa-solid fa-chevron-right")[1];

rightArrow.addEventListener("click", (event) =>{
    let galleryPage = document.getElementById("page");
    if (galleryPage.innerText[0] < galleryPage.innerText[2]) {
        galleryPage.innerText = `${Number(galleryPage.innerText[0])+1}/${galleryPage.innerText[2]}`;
        imagesElement.innerHTML = `<img class="galleryImages" id="chosen" src="images/food21.jpg" alt="food21">`;
        
        let mainIMG = document.getElementById('mainImage');
        let newAlt = arrayOfImages.length;
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
        newGallery();
    }
})
leftArrow.addEventListener("click", (event) =>{
    let galleryPage = document.getElementById("page");
    if (galleryPage.innerText[0] == galleryPage.innerText[2]) {
        galleryPage.innerText = `${Number(galleryPage.innerText[0])-1}/${galleryPage.innerText[2]}`;
        imagesElement.innerHTML = `<img class="galleryImages" id="chosen" src="images/food1.jpg" alt="food1">
        <img class="galleryImages" src="images/food2.jpg" alt="food2">
        <img class="galleryImages" src="images/food3.jpg" alt="food3">
        <img class="galleryImages" src="images/food4.jpg" alt="food4">
        <img class="galleryImages" src="images/food5.jpg" alt="food5">
        <img class="galleryImages" src="images/food6.jpg" alt="food6">
        <img class="galleryImages" src="images/food7.jpg" alt="food7">
        <img class="galleryImages" src="images/food8.jpg" alt="food8">
        <img class="galleryImages" src="images/food9.jpg" alt="food9">
        <img class="galleryImages" src="images/food10.jpg" alt="food10">
        <img class="galleryImages" src="images/food11.jpg" alt="food11">
        <img class="galleryImages" src="images/food12.jpg" alt="food12">
        <img class="galleryImages" src="images/food13.jpg" alt="food13">
        <img class="galleryImages" src="images/food14.jpg" alt="food14">
        <img class="galleryImages" src="images/food15.jpg" alt="food15">
        <img class="galleryImages" src="images/food16.jpg" alt="food16">
        <img class="galleryImages" src="images/food17.jpg" alt="food17">
        <img class="galleryImages" src="images/food18.jpg" alt="food18">
        <img class="galleryImages" src="images/food19.jpg" alt="food19">
        <img class="galleryImages" src="images/food20.jpg" alt="food20">`;
        
        let mainIMG = document.getElementById('mainImage');
        let newAlt = 1;
        mainIMG.outerHTML = mainIMG.outerHTML.replace(`<img id="mainImage" src="images/${mainIMG.alt}.jpg" alt="${mainIMG.alt}">` , `<img id="mainImage" src="images/food${newAlt}.jpg" alt="food${newAlt}"></img>`);
        newGallery();
    }
})