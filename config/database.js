const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",  
    user: "root",
    password: "AdriMartinezSanz27",
    database: "pokemon"
});

pool.query = util.promisify(pool.query);

module.exports = pool;
