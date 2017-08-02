// Dependencies -----------------------------------------------------

// sets up MySQL connection
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	// JawsDB Connection -----------------------------------------------------
	
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
	// Database Connection -----------------------------------------------------

	var connection = mysql.createConnection({
		port:3306,
		host:"localhost",
		user:"root",
		password:"",
		database:"burgers_db"
	});
}



// Create Connection -----------------------------------------------------
connection.connect(function(err){
	if (err) {
		console.error("Error connecting: " + err.stack);
		return;
	}

	//console.log("Connected as ID: " + connection.threadId);
});

// export connection for ORM use
module.exports = connection;