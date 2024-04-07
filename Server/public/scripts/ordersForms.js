let main = document.querySelector("main");

fetch("http://localhost:3000/food", {
    method: "GET",
})
    .then(response => response.json())
    .then((data) => {
        console.log("data");
        let date = new Date(data[0].date);
        main.innerHTML = `<article class="header">
<h1>Jídelní lístek</h1>
<hr class="line"></hr>
</article>
<form>
<article class="day">
<h2>Pondělí ${date.toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[0].name}<input type="number" class="number" foodId="${data[0].id}" min="0" value="0"/><section class="price">${data[0].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[1].name}<input type="number" class="number" foodId="${data[1].id}" min="0" value="0"/><section class="price">${data[1].price},- </section></section>
        <section class="food">${data[2].name}<input type="number" class="number" foodId="${data[2].id}" min="0" value="0"/><section class="price">${data[2].price},- </section></section>
        <section class="food">${data[3].name}<input type="number" class="number" foodId="${data[3].id}" min="0" value="0"/><section class="price">${data[3].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[4].name}<input type="number" class="number" foodId="${data[4].id}" min="0" value="0"/><section class="price">${data[4].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Úterý ${addDays(date, 1).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[5].name}<input type="number" class="number" foodId="${data[5].id}" min="0" value="0"/><section class="price">${data[5].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[6].name}<input type="number" class="number" foodId="${data[6].id}" min="0" value="0"/><section class="price">${data[6].price},- </section></section>
        <section class="food">${data[7].name}<input type="number" class="number" foodId="${data[7].id}" min="0" value="0"/><section class="price">${data[7].price},- </section></section>
        <section class="food">${data[8].name}<input type="number" class="number" foodId="${data[8].id}" min="0" value="0"/><section class="price">${data[8].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[9].name}<input type="number" class="number" foodId="${data[9].id}" min="0" value="0"/><section class="price">${data[9].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Středa ${addDays(date, 2).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[10].name}<input type="number" class="number" foodId="${data[10].id}" min="0" value="0"/><section class="price">${data[10].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[11].name}<input type="number" class="number" foodId="${data[11].id}" min="0" value="0"/><section class="price">${data[11].price},- </section></section>
        <section class="food">${data[12].name}<input type="number" class="number" foodId="${data[12].id}" min="0" value="0"/><section class="price">${data[12].price},- </section></section>
        <section class="food">${data[13].name}<input type="number" class="number" foodId="${data[13].id}" min="0" value="0"/><section class="price">${data[13].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[14].name}<input type="number" class="number" foodId="${data[14].id}" min="0" value="0"/><section class="price">${data[14].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Čtvrtek ${addDays(date, 3).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[15].name}<input type="number" class="number" foodId="${data[15].id}" min="0" value="0"/><section class="price">${data[15].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[16].name}<input type="number" class="number" foodId="${data[16].id}" min="0" value="0"/><section class="price">${data[16].price},- </section></section>
        <section class="food">${data[17].name}<input type="number" class="number" foodId="${data[17].id}" min="0" value="0"/><section class="price">${data[17].price},- </section></section>
        <section class="food">${data[18].name}<input type="number" class="number" foodId="${data[18].id}" min="0" value="0"/><section class="price">${data[18].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[19].name}<input type="number" class="number" foodId="${data[19].id}" min="0" value="0"/><section class="price">${data[19].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Pátek ${addDays(date, 4).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[20].name}<input type="number" class="number" foodId="${data[20].id}" min="0" value="0"/><section class="price">${data[20].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[21].name}<input type="number" class="number" foodId="${data[21].id}" min="0" value="0"/><section class="price">${data[21].price},- </section></section>
        <section class="food">${data[22].name}<input type="number" class="number" foodId="${data[22].id}" min="0" value="0"/><section class="price">${data[22].price},- </section></section>
        <section class="food">${data[23].name}<input type="number" class="number" foodId="${data[23].id}" min="0" value="0"/><section class="price">${data[23].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[24].name}<input type="number" class="number" foodId="${data[24].id}" min="0" value="0"/><section class="price">${data[24].price},- </section></section>
</article>
</article>
<input type="submit" id="submit" value="Odeslat">
</form>`;
        let orderForm = document.querySelector("form");
        orderForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let inputs = document.querySelectorAll(".number")
            let data = {};

            for (const input of inputs) {
                data[input.getAttribute("foodId")] = input.value;
            }
            
            console.log(data);

           fetch(`http://localhost:3000/orders`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-AUTH": localStorage.getItem("token")
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    alert("Odeslano");
                })
        })
    });



function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}