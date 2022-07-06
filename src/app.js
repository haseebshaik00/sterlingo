const express = require('express');

const { db } = require('./db/models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send("<h1 style='color: red;'>Hi!</h1>");
})

db.sync()
    .then(() => {
        app.listen(8382, () => {
            console.log("Server started on https://localhost:8382");
        });
    })
    .catch((err) => {
        console.error("Could not connect database");
        console.log(err);
    });