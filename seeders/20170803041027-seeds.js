'use strict';

// seed the database
module.exports = {
  up: function (queryInterface, Sequelize) {

    // seed burgers
    return queryInterface.bulkInsert('Burgers',[{
      burger_name:"Krabby Patty",
      devoured:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      burger_name:"Pretty Patty",
      devoured:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      burger_name:"Big Belly Burger",
      devoured:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      burger_name:"Chick Filleter",
      devoured:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ],{});
  },

  down: function (queryInterface, Sequelize) {

    // removes seeded burgers
    return queryInterface.bulkDelete('Burgers', null, {truncate:true});
  }
};
