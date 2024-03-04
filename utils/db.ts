const mysql = require("mysql");

const db = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

db.connect((err: Error) => {
	if (err) {
		console.error("Error connecting to MySQL database:", err);
	} else {
		console.log("Connected to MySQL database.");
	}
});

export default db;
