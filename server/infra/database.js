const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});


module.exports = db;