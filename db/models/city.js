"use strict";
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      district: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { tableName: "cities" }
  );
  City.associate = function(models) {
    City.belongsTo(models.Country, {
      foreignKey: "countrycode"
    });

    City.hasOne(models.Country, {
      foreignKey: "capital",
      as: "country"
    });
  };
  return City;
};
