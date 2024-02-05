addEventListener("resize",(event) =>{
    let width = screen.width;
    let login = document.getElementsByClassName('login')[0];
    if (width < 550) {
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
    else{
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Přihlášení';
    }
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
});