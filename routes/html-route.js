// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

module.exports = function(app) {

	// index page
	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname,"../views/layouts/main.handlebars"));
	});
};