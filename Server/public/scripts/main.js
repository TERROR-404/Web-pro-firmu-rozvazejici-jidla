let present = document.getElementById("present")
addEventListener("resize",(event) =>{
    let width = screen.width;
    let login = document.getElementsByClassName('login')[0];
    if (width < 550 && width > 460) {
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
    else if (width > 550){
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Přihlášení';
    }

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

    let header = document.getElementsByTagName("header")[0];
    if (width < 460) {
        header.innerHTML = `<a href="index.html" class="logo">
            <img src="images/b&blogo.png" alt="logo">
        </a>
        <section id="bar"><i class="fa-solid fa-bars"></i></section>`;
        let bar = document.getElementById("bar");
        bar.addEventListener("click" , (event) => {
            header.style.flexDirection = "column";
            header.style.width = width;
            header.style.height = "410px";
            header.innerHTML = `<section id="bar"><i class="fa-solid fa-bars"></i></section>
            <a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
            </a>
            <ul id="navigation">
                <li><a href="orders.html" class="button">Jídelní lístek</a></li>
                <li><a href="information.html" class="button">Informace</a></li>
                <li><a href="gallery.html" class="button">Galerie</a></li>
                <li><a href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
            </ul>`;

            let bar = document.getElementById("bar");
            bar.style.width = "100%"
            bar.style.height = "70px"
            bar.style.justifyContent = "center"
            let logo = document.getElementsByClassName("logo")[0];
            logo.style.transform = "skew(0deg, 0deg)";
            logo.style.height = "70px";
            logo.style.width = "100%";
            document.getElementsByTagName("img")[0].style.transform = "skew(0deg, 0deg)";

            header.animate([
                {
                    height: '114px',
                    width: '100%'
                },
                {
                    height: '410',
                    width: '100%'
                }
                ], {
                duration: 500,
                easing: "ease"
            });

            main.style.top = "+637px";
            let mainHeight = main.offsetHeight - 200 +"px";
            footer.style.marginTop = mainHeight;

        })
    } else{
        switch (present.innerText) {
            case "Jídelní lístek":
                header.innerHTML = `<a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
            </a>
            <ul id="navigation">
                    <li><a id="present" href="orders.html" class="button">Jídelní lístek</a></li>
                    <li><a href="information.html" class="button">Informace</a></li>
                    <li><a href="gallery.html" class="button">Galerie</a></li>
                    <li><a href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
            </ul>`
                break;
            case "Informace":
                header.innerHTML = `<a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
            </a>
            <ul id="navigation">
                    <li><a href="orders.html" class="button">Jídelní lístek</a></li>
                    <li><a id="present" href="information.html" class="button">Informace</a></li>
                    <li><a href="gallery.html" class="button">Galerie</a></li>
                    <li><a href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
            </ul>`
                break;
            case "Galerie":
                header.innerHTML = `<a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
            </a>
            <ul id="navigation">
                    <li><a href="orders.html" class="button">Jídelní lístek</a></li>
                    <li><a href="information.html" class="button">Informace</a></li>
                    <li><a id="present" href="gallery.html" class="button">Galerie</a></li>
                    <li><a href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
            </ul>`
                break;
            case `<i class="fa-solid fa-right-to-bracket"></i> Přihlášení`:
                header.innerHTML = `<a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
            </a>
            <ul id="navigation">
                    <li><a href="orders.html" class="button">Jídelní lístek</a></li>
                    <li><a href="information.html" class="button">Informace</a></li>
                    <li><a href="gallery.html" class="button">Galerie</a></li>
                    <li><a id="present" href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
            </ul>`
                break;
            case null:
                header.innerHTML = `<a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
                </a>
                <ul id="navigation">
                <li><a href="orders.html" class="button">Jídelní lístek</a></li>
                <li><a href="information.html" class="button">Informace</a></li>
                <li><a href="gallery.html" class="button">Galerie</a></li>
                <li><a href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
                </ul>`;
                break;
        
        }
        header.style.flexDirection = "row";
        header.style.width = "100%";
        header.style.height = "80px";
    }
});

addEventListener("load",(event) =>{
    let width = screen.width;
    let login = document.getElementsByClassName('login')[0];
    if (width < 550 && width > 460) {
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
    else if (width > 550){
        login.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Přihlášení';
    }

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

    let header = document.getElementsByTagName("header")[0];
    if (width < 460) {
        header.innerHTML = `<a href="index.html" class="logo">
            <img src="images/b&blogo.png" alt="logo">
        </a>
        <section id="bar"><i class="fa-solid fa-bars"></i></section>`;
        let bar = document.getElementById("bar");
        bar.addEventListener("click" , (event) => {
            header.style.flexDirection = "column";
            header.style.width = width;
            header.style.height = "410px";
            header.innerHTML = `<section id="bar"><i class="fa-solid fa-bars"></i></section>
            <a href="index.html" class="logo">
                <img src="images/b&blogo.png" alt="logo">
            </a>
            <ul id="navigation">
                <li><a href="orders.html" class="button">Jídelní lístek</a></li>
                <li><a href="information.html" class="button">Informace</a></li>
                <li><a href="gallery.html" class="button">Galerie</a></li>
                <li><a href="login.html" class="login"><i class="fa-solid fa-right-to-bracket"></i> Přihlášení</a></li>
            </ul>`;

            let bar = document.getElementById("bar");
            bar.style.width = "100%"
            bar.style.height = "70px"
            bar.style.justifyContent = "center"
            let logo = document.getElementsByClassName("logo")[0];
            logo.style.transform = "skew(0deg, 0deg)";
            logo.style.height = "70px";
            logo.style.width = "100%";
            document.getElementsByTagName("img")[0].style.transform = "skew(0deg, 0deg)";

            header.animate([
                {
                    height: '114px',
                    width: '100%'
                },
                {
                    height: '410',
                    width: '100%'
                }
                ], {
                duration: 500,
                easing: "ease"
            });

            main.style.top = "+637px";
            let mainHeight = main.offsetHeight - 200 +"px";
            footer.style.marginTop = mainHeight;
        })
    }
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