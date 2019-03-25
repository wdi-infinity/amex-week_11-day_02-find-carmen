"use strict";
module.exports = (sequelize, DataTypes) => {
  const CountryLanguage = sequelize.define(
    "CountryLanguage",
    {
      language: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      isofficial: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      percentage: {
        allowNull: false,
        type: DataTypes.REAL
      }
    },
    { tableName: "country_language" }
  );
  CountryLanguage.associate = function(models) {
    CountryLanguage.belongsTo(models.Country, {
      foreignKey: "countrycode",
      onDelete: "CASCADE"
    });
  };
  return CountryLanguage;
};
