'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }

    User.init({
        user_name: DataTypes.STRING,
        user_age: DataTypes.INTEGER,
        user_gender: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
        timestamps : false
    });
    return User;
};