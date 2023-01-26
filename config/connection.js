require('dotenv').config(); //Loads .env file contents into process.env
const { Sequelize } = require('sequelize'); //Imports sequelize

//Configuring sequelize database connection
const sequelize = process.env.JAWSDB_URL 
    ? new Sequelize(process.env.JAWSDB_URL) 
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    });

// const test = async () => {
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
//     } catch (error) {
//   console.error('Unable to connect to the database:', error);
//     }
// }

// test();
module.exports = sequelize; //Exports to express server.js