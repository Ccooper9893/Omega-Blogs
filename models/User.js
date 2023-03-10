//Importing Model class and built-in Datatypes
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

//Importing sequelize
const sequelize = require('../config/connection');

//Creates User class that inherits methods/properties from Model
class User extends Model {
    //Password validation function
    validatePassword(attempt) {
        return bcrypt.compareSync(attempt, this.password);
    }
};

//Initializes to define a new table in MySQL database for users information
User.init(
    {
    //Define column attributes (Define values required in table)
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8], //Minimum 8 characters long
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
    },
    {
    //Hooks
        hooks: { //Before inserting userData into table, hash the password
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
                  },
            async beforeBulkCreate(newUserData) {
                for(const user of newUserData) {
                    user.password =  await bcrypt.hash(user.password, 10);
                }
                return newUserData;
                }
            },
    
    //Table options
        sequelize,
        underscored: true,
        freezeTableName: true, //Tells sequelize to make table name plural (ex. users) 
        timestamps: false,
        modelName: 'user',
    },
);

module.exports = User;