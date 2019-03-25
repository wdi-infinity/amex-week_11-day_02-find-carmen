"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      code: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      continent: {
        type: DataTypes.ENUM(
          "Asia",
          "Europe",
          "North America",
          "Africa",
          "Oceania",
          "Antarctica",
          "South America"
        ),
        allowNull: false
      },
      region: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      surfacearea: {
        type: DataTypes.REAL,
        allowNull: false
      },
      indepyear: {
        type: DataTypes.SMALLINT
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lifeexpectancy: {
        type: DataTypes.REAL
      },
      gnp: {
        type: DataTypes.DOUBLE
      },
      gnpold: {
        type: DataTypes.DOUBLE
      },
      localname: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      governmentform: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      headofstate: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      code2: {
        type: DataTypes.CHAR(2)
      }
    },
    { tableName: "countries" }
  );
  Country.associate = function(models) {
    Country.hasMany(models.City, {
      foreignKey: "countrycode",
      as: "cities"
    });

    Country.belongsTo(models.City, {
      foreignKey: "capital",
      onDelete: "CASCADE"
    });

    Country.hasMany(models.CountryLanguage, {
      foreignKey: "countrycode",
      as: "languages"
    });
  };
  return Country;
};
