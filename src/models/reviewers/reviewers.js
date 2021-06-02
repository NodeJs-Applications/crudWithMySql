const { Sequelize , DataTypes , Model } = require('sequelize');

const sequelize = require('../../config/db/sequelizeWithMysql');

class Reviewers extends Model {};

Reviewers.init({
    id : {
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4,
        primaryKey : true
    },
    first_name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    last_name : {
        type : DataTypes.STRING,
        allowNull : false
    }
} , {
    sequelize,
    tableName : 'tbl_reviewers'
})

module.exports = Reviewers;