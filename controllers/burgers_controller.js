// Dependencies -----------------------------------------------------

var db = require("../models");

// Node Dependencies
var express = require('express');
var router = express.Router();

// Extracts the sequelize connection from the models object
var sequelizeConnection = db.sequelize;

// Sync the tables
sequelizeConnection.sync(({force:true}));

// Router -----------------------------------------------------

// create routes that will connect the model and view

// route that gets/shows all the burgers
router.get("/", function(req,res){
	
	db.Burgers.findAll({}).then(function(dbBurger){

		var burgerObject = {
			burgers: dbBurger
		};

		res.render("index", burgerObject);
	});
});

// route to post/add a burger
router.post("/", function(req,res){

	db.Burgers.create({
		burger_name:req.body.burger
	}).then(function(dbBurger){

		res.redirect("/");
	});
});

// route to devour a burger by updating its devoured category to true
router.put("/:id", function(req,res){
	
	db.Burgers.update({
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

