const {Sequelize} = require("sequelize");
require('dotenv').config();

const password = process.env.DATABASE_PASSWORD
const sequelize = new Sequelize("users","root", password, {
    dialect: "mysql",
    host: "localhost"
})


try {
    sequelize.authenticate();
} catch (error) {
    console.log(`error: ${error}`)
}

module.exports = sequelize
