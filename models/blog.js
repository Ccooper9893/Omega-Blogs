//Importing Model class and built-in Datatypes
const {Model, Datatypes} = require('sequelize');

//Creates Blog class that inherits methods/properties from Model
class Blog extends Model {};

//Initializes to define a new table in MySQL database for users information
Blog.init(
    //Define column attributes (Define values required in table)
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100] //Min: 1 character - Max: 100 characters
            },
        },
        blog_body: {
            type: Datatypes.STRING,
            allowNull: false,   
        },
        user_id: {
            type: Datatypes.INTEGER,
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
        modelName: 'blog'
    }
);

module.exports = Blog;