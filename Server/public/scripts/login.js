const email = document.getElementById("e-mail");
const password = document.getElementById("password");
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    event.preventDefault();

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: email.value,
            password: password.value
        })
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data.token);
            if (data.token) {
                localStorage.setItem("token", data.token);
                window.location.href = "/index.html";
            }
            else {
                email.value = '';
                password.value = '';
                alert(data.message);
            }
        });
});

//const token = localStorage.getItem("token");

if (token) {
    window.location.href = "/index.html";
}