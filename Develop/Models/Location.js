const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../../config/connect');

class Location extends Model{};

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        name: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
              },
        },
    }, 
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,  // TABLE NAME WON'T PLURALIZE
      underscored: false,     // AUTOMATIC UNDERSCORE TABLE NAME
      modelName: 'location',      // MODEL NAME
    },
);