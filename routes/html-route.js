// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

module.exports = function(app) {

	app.get("/", function(req,res){
		// get index.handlebars
		res.render(path.join(__dirname,"../views/index.handlebars"));
	});
};