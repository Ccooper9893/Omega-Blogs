//Importing Model class and built-in Datatypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//Creates Blog class that inherits methods/properties from Model
class Blog extends Model {};

//Initializes to define a new table in MySQL database for users information
Blog.init(
    //Define column attributes (Define values required in table)
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100] //Min: 1 character - Max: 100 characters
            },
        },
        blog_body: {
            type: DataTypes.TEXT,
            allowNull: false,   
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    //Table Options
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        modelName: 'blog',
    },
);

module.exports = Blog;