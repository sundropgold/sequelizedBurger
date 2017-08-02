// Dependencies -----------------------------------------------------
var express = require("express");

var router = express.Router();

// Router -----------------------------------------------------

// create routes that will connect the model and view

// route that gets/shows all the burgers
router.get("/", function(req,res){
	
});

// route to post/add a burger
router.post("/", function(req,res){

	
});

// route to devour a burger by updating its devoured category to true
router.put("/:id", function(req,res){
	
});

module.exports = router;