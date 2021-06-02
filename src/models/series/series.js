const { Sequelize , DataTypes , Model } = require('sequelize');
const sequelize = require('../../config/db/sequelizeWithMysql');

class Series extends Model {};

Series.init({
    id : {
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4,
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    released_year : {
        type : DataTypes.STRING,
        allowNull : false
    },
    genre : {
        type : DataTypes.STRING
    }
},{
    sequelize,
    tableName : 'tbl_series'
})

module.exports = Series;