// Dependencies -----------------------------------------------------
var connection = require("../config/connection.js");


// ORM -----------------------------------------------------

//  helper function to create question marks to stand in for
// values passed through MySQL queries
function printQuestionMarks(num) {
	// num is the length of the values array

	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();

}

// helper function to convert object key/value pairs to MySQL syntax
function objToSql(obj) {
	var arr = [];

	// loop through the keys in the object
	for (var key in obj) {
		var value = obj[key];

		// check to skip hidden properties
		if (Object.hasOwnProperty.call(obj, key)){

			// if a string has spaces, add quotes around
			if(typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}

			// save key/value pairs as key=value
			arr.push(key + "=" + value);
		}
	} 

	// return the array as string
	return arr.toString();
}

// methods that will execute the necessary MySQL commands
var orm = {
	selectAll: function(table, cb) {
		// function to select all data from table

		var queryString = "SELECT * FROM " + table + ";";

		connection.query(queryString, function(err,result){
			if(err) throw err;

			cb(result);
		});

	},
	insertOne: function(table, columns, values, cb) {
		// function to insert data into table

		var queryString = "INSERT INTO " + table;
		queryString += " (" + columns.toString();
		queryString += ") VALUES (" + printQuestionMarks(values.length) + ")"; 

		connection.query(queryString, values, function(err, result){
			if(err) throw err;

			cb(result);
		});

	},
	updateOne: function(table, objColVals, condition, cb) {
		// function to update one portion of data

		var queryString = "UPDATE " + table;
		queryString += " SET " + objToSql(objColVals);
		queryString += " WHERE " + condition; 

		connection.query(queryString, function(err, result){
			if(err) throw err;

			cb(result);
		});

	}
};


// export ORM object for controller
module.exports = orm;