const express = require('express');
require('dotenv').config();

const  sequelize  = require('./src/config/db/sequelizeWithMysql');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : true}));





app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})

app.use(require('./routes'));

module.exports = app;