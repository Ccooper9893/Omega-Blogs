//Importing Model class and built-in Datatypes
const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
//Importing sequelize
const sequelize = require('sequelize');

//Creates User class that inherits methods/properties from Model
class User extends Model {
    //Password validation function
};

//Initializes to define a new table in MySQL database for users information
User.init(
    {
    //Define column attributes (Define values required in table)
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [8], //Minimum 8 characters long
            },
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
        },
        
    },
    //Hooks
    {
        hooks: { //Before inserting userData into table, hash the password
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
    },
    //Table options
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        modelName: 'user'
    },
);