$(document).ready(function(){

	// SHOW ALL BURGERS --------------------------------------
	function showBurgers() {
		
	}

	// DEVOUR BURGER --------------------------------------
	$('#devour-btn').on('click', function(){

	});

	// CREATE BURGER --------------------------------------
	$('#submit').on('click', createBurger);

	// function to create burger
	function createBurger(event){
		event.preventDefault();

		var burgerName = $("#burger-name").val().trim();

		var newBurger = {
			burger_name:burgerName
		};

		$.post("/", newBurger);

		$("#burger-name").val("");
	}

});