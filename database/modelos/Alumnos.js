const sequelize = require('../db')
const { Sequelize,DataTypes, STRING } = require('sequelize');

const Alumno = sequelize.define('Alumno', {
    alumno_id:{
        type: DataTypes.StringDataType,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
});