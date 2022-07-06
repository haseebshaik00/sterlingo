const express = require('express');

const { db } = require('./db/models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sync()
    .then(() => {
        app.listen(8383, () => {
            console.log("Server staeted on https://localhost:8383");
        });
    })
    .catch((err) => {
        console.error("Could not connect database");
        console.log(err);
    });