"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("countries", {
      code: {
        allowNull: false,
        type: Sequelize.CHAR(3),
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      continent: {
        allowNull: false,
        type: Sequelize.ENUM(
          "Asia",
          "Europe",
          "North America",
          "Africa",
          "Oceania",
          "Antarctica",
          "South America"
        )
      },
      region: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      surfacearea: {
        allowNull: false,
        type: Sequelize.REAL
      },
      indepyear: {
        type: Sequelize.SMALLINT
      },
      population: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lifeexpectancy: {
        type: Sequelize.REAL
      },
      gnp: {
        type: Sequelize.DOUBLE
      },
      gnpold: {
        type: Sequelize.DOUBLE
      },
      localname: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      governmentform: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      headofstate: {
        type: Sequelize.TEXT
      },
      code2: {
        allowNull: false,
        type: Sequelize.CHAR(2)
      },
      capital: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "cities",
          key: "id"
        }
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
    return queryInterface.dropTable("countries");
  }
};
