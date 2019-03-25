"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("cities", "countrycode", {
      type: Sequelize.CHAR(3),
      references: {
        model: "countries",
        key: "code"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("cities", "countrycode");
  }
};
