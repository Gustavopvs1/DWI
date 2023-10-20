const Sequelize = require('sequelize')

const sequelize = new Sequelize('','','',{
    host: 'localhost',
    dialect: 'mysql',
});

const open = async() => await sequelize.authenticate()
open();
module.exports = sequelize; 