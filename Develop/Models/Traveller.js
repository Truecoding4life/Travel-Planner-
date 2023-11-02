const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../../config/connect');

class Traveler extends Model{};

Traveler.init(
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
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        }
    }, 
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,  // TABLE NAME WON'T PLURALIZE
      underscored: true,     // AUTOMATIC UNDERSCORE TABLE NAME
      modelName: 'traveler',      // MODEL NAME
    },
);