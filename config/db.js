require("dotenv").config();
import mysql from "mysql2/promise";

const pool = mysql.createPool({
	host: `${process.env.DB_HOST}`,
	user: `${process.env.DB_USER}`,
	port: `${process.env.DB_PORT}`,
	password: `${process.env.DB_PASSWORD}`,
	database: `${process.env.DB_DATABASE}`,
});

export default pool;
