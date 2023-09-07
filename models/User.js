const {DataTypes} = require("sequelize");
const db = require("../db/conn");

const Users = db.define("Users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Users