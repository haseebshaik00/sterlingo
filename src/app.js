const express = require('express');

const { db } = require('./db/models');
const { usersRoute } = require('./routes/users');
const { transactionsRoute } = require('./routes/transactions');

const app = express();
d
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRoute);
app.use('/api/transactions', transactionsRoute);

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