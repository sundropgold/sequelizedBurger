// Dependencies -----------------------------------------------------
var express = require("express");

var router = express.Router();

var db = require("../models");

// Router -----------------------------------------------------

// create routes that will connect the model and view

// route that gets/shows all the burgers
router.get("/", function(req,res){
	
	db.Burger.findAll({}).then(function(dbBurger){

		var burgerObject = {
			burgers: dbBurger
		};

		res.render("index, burgerObject");
	});
});

// route to post/add a burger
router.post("/", function(req,res){

	db.Burger.create({
		burger_name:req.body.burger_name
	}).then(function(dbBurger){

		res.redirect("/");
	});
});

// route to devour a burger by updating its devoured category to true
router.put("/:id", function(req,res){
	
	db.Burger.update({
		devoured:true
	},{
		where:{
			id:req.params.id
		}
	}).then(function(dbBurger){

		res.redirect("/");
	});
});

module.exports = router;