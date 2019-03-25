"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("country_language", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countrycode: {
        allowNull: false,
        type: Sequelize.CHAR(3),
        onDelete: "CASCADE",
        references: {
          model: "countries",
          key: "code"
        }
      },
      language: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      isofficial: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      percentage: {
        allowNull: false,
        type: Sequelize.REAL
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("country_language");
  }
};
