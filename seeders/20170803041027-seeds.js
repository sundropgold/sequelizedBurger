'use strict';

// seed the database
module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Burger',[{
      burger_name:"Krabby Patty",
      devoured:false
    },{
      burger_name:"Pretty Patty",
      devoured:false
    },{
      burger_name:"Big Belly Burger",
      devoured:false
    },{
      burger_name:"Chick Filleter",
      devoured:false
    }
    ],{});
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Burger',[{
      burger_name:"Krabby Patty"
    },{
      burger_name:"Pretty Patty"
    },{
      burger_name:"Big Belly Burger"
    },{
      burger_name:"Chick Filleter"
    }]);
  }
};
