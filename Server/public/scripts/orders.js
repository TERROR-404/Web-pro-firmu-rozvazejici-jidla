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
<article class="day">
<h2>Pondělí ${date.toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[0].name}<section class="price">${data[0].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[1].name}<section class="price">${data[1].price},- </section></section>
        <section class="food">${data[2].name}<section class="price">${data[2].price},- </section></section>
        <section class="food">${data[3].name})<section class="price">${data[3].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[4].name}<section class="price">${data[4].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Úterý ${addDays(date, 1).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[5].name}<section class="price">${data[5].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[6].name}<section class="price">${data[6].price},- </section></section>
        <section class="food">${data[7].name}<section class="price">${data[7].price},- </section></section>
        <section class="food">${data[8].name}<section class="price">${data[8].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[9].name}<section class="price">${data[9].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Středa ${addDays(date, 2).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[10].name}<section class="price">${data[10].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[11].name}<section class="price">${data[11].price},- </section></section>
        <section class="food">${data[12].name}<section class="price">${data[12].price},- </section></section>
        <section class="food">${data[13].name}<section class="price">${data[13].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[14].name}<section class="price">${data[14].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Čtvrtek ${addDays(date, 3).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[15].name}<section class="price">${data[15].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[16].name}<section class="price">${data[16].price},- </section></section>
        <section class="food">${data[17].name}<section class="price">${data[17].price},- </section></section>
        <section class="food">${data[18].name}<section class="price">${data[18].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[19].name}<section class="price">${data[19].price},- </section></section>
</article>
</article>
<article class="day">
<h2>Pátek ${addDays(date, 4).toLocaleDateString("cs-CZ")}</h2>
<article class="soup">
    <section class="type">Polévka</section>
    <section class="food">${data[20].name}<section class="price">${data[20].price},- </section></section>
</article>
<article class="mainFoods">
    <section class="type">Hlavní jídla</section>
    <article class="foods">
        <section class="food">${data[21].name}<section class="price">${data[21].price},- </section></section>
        <section class="food">${data[22].name}<section class="price">${data[22].price},- </section></section>
        <section class="food">${data[23].name}<section class="price">${data[23].price},- </section></section>
    </article>
</article>
<article class="salad">
    <section class="type">Salát</section>
    <section class="food">${data[24].name}<section class="price">${data[24].price},- </section></section>
</article>
</article>
<a href="login.html" class="login">Pro změnu objednávky se prosím přihlaste</a>
<a href="information.html" target="_blank" class="register">Jak se registrovat?</a>`;

});

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }