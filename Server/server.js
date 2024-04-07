import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//import Joi, { date } from "joi"; // validace dat pozdeji
//import bcrypt, { hash } from "bcrypt"; // hashing hesel pozdeji
//import helmet

import pg from "pg";
const { Client } = pg
//const { Client } = require('pg');

const client = new Client({
    host: 'hosting.ssps.cajthaml.eu',
    port: 3337,
    user: 'andrysek_lukas_64d3f_88opn',
    password: 'ynQWGNzqUeImX4ruUdY2V7PI4ZEwivdv',
    database: 'andrysek_lukas_64d3f_88opn_db'
})

client.connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static("public"));

//const tokens = [];

const generateToken = async (length = 10) => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // generovani bezpecnejsich tokenu pozdeji
    while (true) {
        let token = "";

        for (let i = 0; i < length; i++) {
            token += characters[Math.floor(Math.random() * characters.length)];
        }

        //token = "MI3Ki75A9a8VoWacfQgppr9BG";
        const result = await client.query(`SELECT exists (SELECT 1 FROM public."Tokens" WHERE "webToken" = $1 LIMIT 1);`, [token]) // https://stackoverflow.com/questions/8149596/check-value-if-exists-in-column
        //console.log(result.rows[0].exists);

        if (result.rows[0].exists) {
            continue;
        }
        /*if (tokens.find(t => t.token === token))
            continue;
*/
        return token;
    }
}

//console.log(generateToken(25));
//generateToken();
//console.log(tokens)

app.post("/login", async (req, res) => {

    const { username, password } = req.body

    let hash = '';
    let customerId = '';
    try {
        const result = await client.query(`SELECT *
	FROM public."Customer"
	WHERE "email" = $1`, [username]);
        hash = result.rows[0].passwordHash;
        customerId = result.rows[0].id
        //console.log(result.rows[0]);
    } catch (error) {
        res.status(401);
        res.json({ message: "Tento email u nás není registrován" })
        return;
    }
    console.log("hash : " + hash)
    if (password == hash) { // HASH pozdeji
        const token = await generateToken(25); // lepsi generovani pozdeji
        console.log(token);
        //tokens.push({ token, user: username });
        client.query(`INSERT INTO public."Tokens"(
            "customerId", "webToken")
            VALUES ($1, $2);`, [customerId, token])

        //console.log(tokens)
        res.json({ token })
    }
    else {
        res.status(401);
        res.json({ message: "Špatné heslo" })
    }
})

app.get("/food", async (req, res) => { // server vrati jidelni listek na dalsi tyden
    let date = new Date();
    date.setDate(date.getDate() + (((1 + 7 - date.getDay()) % 7) || 7));
    let firstDate = date.toISOString().split('T')[0]; // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    date.setDate(date.getDate() + 1);
    let secondDate = date.toISOString().split('T')[0];
    date.setDate(date.getDate() + 1);
    let thirdDate = date.toISOString().split('T')[0];
    date.setDate(date.getDate() + 1);
    let fourthDate = date.toISOString().split('T')[0];
    date.setDate(date.getDate() + 1);
    let fifthDate = date.toISOString().split('T')[0];

    let Foods = [];

    console.log("jidlo odeslano");
    console.log(firstDate);

    try {
        const result = await client.query(`SELECT *
	FROM "Food"
	WHERE date=$1 OR date=$2 OR date=$3 OR date=$4 OR date=$5 
    ORDER BY "date", CASE
    WHEN "type" = 'Soup' THEN 1
    WHEN "type" = 'Main' THEN 2
    WHEN "type" = 'Salad' THEN 3
    END ASC`, [firstDate, secondDate, thirdDate, fourthDate, fifthDate]);
        Foods = result.rows;
        res.json(Foods)
    } catch (error) {
        res.status(500);
        res.json({ message: "Nastala chyba" })
        return;
    }


})

app.post("/orders", async (req, res) => { // stranka posle serveru novy formular
    let data = req.body;
    console.log(data);
    //console.log(req.get("X-Auth"));
    let result = await client.query(`SELECT "customerId"
    FROM "Tokens"
    WHERE "webToken" = $1`, [req.get("X-Auth")])
    let customerId = result.rows[0].customerId;
    //console.log(customerId);
    try {
        const result = await client.query(`INSERT INTO "Order" ("customerId")
        VALUES ($1)
        RETURNING "id"`, [customerId])
        let orderId = result.rows[0].id;
        //console.log(orderId);
        for (const foodId in data) {
            /*console.log(orderId);
            console.log(foodId);
            console.log(data[foodId]);*/
            await client.query(`INSERT INTO "FoodOrder" ("orderId", "foodId", "quantity")
        VALUES
        ($1, $2, $3)`,[orderId, foodId, data[foodId]])
        }

    } catch (error) {

    }
    res.status(202)
    res.send("Prijato")
})
app.patch("/orders", (req, res) => { // stranka posle serveru zmenene data formulare

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});