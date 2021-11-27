const { Pool } = require("pg");

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'TEST',
    port: '5434'
});

pool.connect((err) => {
    if (err) throw err;
    console.log("connected");
})
module.exports = pool;