const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.db_Name , process.env.db_Username , process.env.db_Password , {
    dialect : process.env.dialect,
    host : process.env.host
})

const dbConnection = async () => {
    try {
        sequelize.authenticate();
        console.log("DB Connection Successfull");
    } catch (error) {
        console.log("DB Connection Failed" , error);
    }
    try {
        sequelize.sync({ alter: true });
        console.log("All Models are in sync");
    } catch (error) {
        console.log("All Models are not in sync" , error);
    }
}

dbConnection();

module.exports = sequelize;