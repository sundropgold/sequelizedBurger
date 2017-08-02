// Dependencies 
// =============================================================

var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// require models for syncinc
var db = require("./models");

// Static Files
// =============================================================
// serve static files - css and js

app.use("/public", express.static("./public"));

// Body Parser
// =============================================================
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Method Override
// =============================================================
// Overrides with POST having ?_method=PUT

app.use(methodOverride("_method"));

// Handlebars
// =============================================================
// Provides the templates for the view

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Router
// =============================================================
// Import routes and give the server access to them

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Syncing
// =============================================================

db.sequelize.sync({force:true}).then(function(){
	app.listen(PORT);
});


