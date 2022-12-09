export {};
const mysql = require("mysql2");
require("dotenv").config();
let DbConn;

try {
  DbConn = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });
} catch (error) {
  console.log(error);
}

module.exports = DbConn;
