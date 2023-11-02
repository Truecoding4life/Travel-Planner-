const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../../config/connect');

class Trips extends Model{};

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        tripBudget: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
              },
        },
        travelerAmount: {
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
      modelName: 'trips',      // MODEL NAME
    },
);