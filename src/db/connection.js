const Sequelize = require('sequelize');

const db = new Sequelize('sterlingoDB', 'sterlingoUser', 'sterlingo123', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
    .then(() => console.log("connection.js --- Database Connected!"))
    .catch((err) => console.log(err));

module.exports = {
    db, Sequelize
}