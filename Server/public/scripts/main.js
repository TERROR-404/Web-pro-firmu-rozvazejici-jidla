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
    if (width < 460) {
        main.style.top = 257 + "px";
    }
    else if (width < 820) {
        main.style.top = 297 + "px";
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
    if (width < 460) {
        main.style.top = 257 + "px";
    }
    else if (width < 820) {
        main.style.top = 297 + "px";
    }
    else{
        main.style.top = 415 + "px";
    }
    let mainHeight = main.offsetHeight - 200 +"px";
    footer.style.marginTop = mainHeight;
});

const token = localStorage.getItem("token")

const login = document.getElementById("login");
const logout = document.getElementById("logout");

if (token) {
    login.style.display = "none";
}
else logout.style.display = "none";

//prozatimni logout
logout.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.href = "/index.html"
})