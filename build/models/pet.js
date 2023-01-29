"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetFactory = exports.Pet = void 0;
const sequelize_1 = require("sequelize");
class Pet extends sequelize_1.Model {
}
exports.Pet = Pet;
function PetFactory(sequelize) {
    Pet.init({
        petId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        createdOn: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedOn: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'pets',
        sequelize
    });
}
exports.PetFactory = PetFactory;
