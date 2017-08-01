// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

	// route that gets/shows all of the burgers
	app.get("/", function(req,res){

		db.Burger.findAll({}).then(function(dbBurger){
			res.render("index", dbBurger);
		});
		
	});

	// route to post/create a burger
	app.post("/", function(req,res){

		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(dbBurger){
			res.redirect("/");
		});

	});

	// route to devour a burger by updating its devoured col
	app.put("/", function(req,res){

		db.Burger.update({
			devoured:true
		},{
			where:{
				id:req.body.id
			}
		}).then(function(dbBurger){
			res.redirect("/");
		});

	});
};