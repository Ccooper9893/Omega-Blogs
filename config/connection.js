require('dotenv').config(); //Loads .env file contents into process.env

const Sequelize = require('sequelize'); //Imports sequelize

//Configuring sequelize database connection
const sequelize = process.env.JAWSDB_URL 
    ? new Sequelize(process.env.JAWSDB_URL) 
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql'
    // Used when there are decimal numbers in database?
    //     dialectOptions: {
    //     decimalNumbers: true,
    //   },
    // dateStrings: Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather than
    // inflated into JavaScript Date objects. Can be true/false or an array of type names to keep as strings. (Default: false)
    });

module.exports = sequelize; //Exports to express server.js