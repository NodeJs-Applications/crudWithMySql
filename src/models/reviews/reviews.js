const { Sequelize , DataTypes , Model } = require('sequelize');

const sequelize = require('../../config/db/sequelizeWithMysql');

const Reviewers = require('../reviewers/reviewers');
const Series = require('../series/series');

class Reviews extends Model {};

Reviews.init({
    id : {
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4,
        primaryKey : true
    },
    rating : {
        type : DataTypes.FLOAT,
        allowNull : false
    }
    //,
    // reviewer_id : {
    //     type : DataTypes.UUID,
    //     allowNull : false        
    // },
    // series_id : {
    //     type : DataTypes.UUID,
    //     allowNull : false
    // }
},{
    sequelize,
    tableName : 'tbl_reviews'
})

Reviewers.hasMany(Reviews);
Reviews.belongsTo(Reviewers);
Series.hasMany(Reviews);
Reviews.belongsTo(Series);

module.exports = Reviews;