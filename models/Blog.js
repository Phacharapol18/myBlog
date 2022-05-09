const { extname } = require('path');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init({
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    time:{
        type:DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull:false
    }
},
{
    sequelize
});
module.exports=Blog