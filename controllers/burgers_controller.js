// Dependencies -----------------------------------------------------
var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

// Router -----------------------------------------------------

// create routes that will connect the model and view

// route that gets/shows all the burgers
router.get("/", function(req,res){
	burger.selectAll(function(data){
		var burgerObject = {
			burgers: data
		};

		res.render("index", burgerObject);
	});
});

// route to post/add a burger
router.post("/", function(req,res){

	var date = new Date();

	burger.insertOne([
		// columns
		"burger_name", "devoured", "date"
		], [
		// values
		req.body.burger, req.body.devoured, date
		], function() {
			res.redirect("/");
		});
});

// route to devour a burger by updating its devoured category to true
router.put("/:id", function(req,res){
	// the condition = id where to update the burger
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.burger
	}, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;