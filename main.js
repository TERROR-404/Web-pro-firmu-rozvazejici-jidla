addEventListener("resize",(event) =>{
    let width = screen.width;
    let login = document.getElementsByClassName('login')[0];
    if (width < 550) {
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
    else{
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Přihlášení';
    }

    let main = document.getElementsByTagName('main')[0];
    let footer = document.getElementsByTagName('footer')[0];
    if (width < 820) {
        main.style.top = 347 + "px";
    }
    else{
        main.style.top = 415 + "px";
    }
    let mainHeight = main.offsetHeight - 200 +"px";
    footer.style.marginTop = mainHeight;
});

addEventListener("load",(event) =>{
    let width = screen.width;
    let login = document.getElementsByClassName('login')[0];
    if (width < 550) {
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
    else{
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Přihlášení';
    }

    let main = document.getElementsByTagName('main')[0];
    let footer = document.getElementsByTagName('footer')[0];
    if (width < 820) {
        main.style.top = 347 + "px";
    }
    else{
        main.style.top = 415 + "px";
    }
    let mainHeight = main.offsetHeight - 200 +"px";
    footer.style.marginTop = mainHeight;
});