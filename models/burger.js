// Dependencies -----------------------------------------------------
var orm = require("../config/orm.js");

// Burger Model -----------------------------------------------------

var burger = {
	selectAll: function(cb){
		// function to select and display all burgers

		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(columns, values, cb){
		// function to add a new burger

		orm.insertOne("burgers", columns, values, function(res){
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb){
		// function to update the status 'devoured' of a burger
		
		orm.updateOne("burgers", objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;