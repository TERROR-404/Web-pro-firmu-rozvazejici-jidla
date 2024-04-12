addEventListener("resize",(event) =>{
    let width = screen.width;
    let main = document.getElementsByTagName('main')[0];
    let footer = document.getElementsByTagName('footer')[0];    
    let navigation = document.getElementById("navigation");
    if (width < 820) {
        main.style.top = 297 + "px";
        navigation.style.display = "none";
    }
    else{
        main.style.top = 415 + "px";
        navigation.style.display = "flex";

    }
    let mainHeight = main.offsetHeight - 200 +"px";
    footer.style.marginTop = mainHeight;
});

addEventListener("load",(event) =>{
    let width = screen.width;
    let main = document.getElementsByTagName('main')[0];
    let footer = document.getElementsByTagName('footer')[0];
    if (width < 820) {
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

let orderLink = document.querySelector("ul li:first-child");



if (token) {
    login.style.display = "none";
    orderLink.innerHTML=`<a href="ordersForm.html" class="button">Jídelní lístek</a>`;
}
else logout.style.display = "none";

//prozatimni logout
logout.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.href = "/index.html"
})


let hamburgerMenu = document.getElementById("hamburgerMenu");
hamburgerMenu.addEventListener("click", () => {
    let navigation = document.getElementById("navigation");
    if (navigation.style.display === "block") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }
})
