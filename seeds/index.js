const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    //Sync the database and delete table data if exists
    await sequelize.sync({ force: true });
    console.log('\n DATABASE SYNCED \n');

    //Seed User table with data
    await seedUsers();
    console.log('\n USERS SEEDED \n');

    //Seed Blog table with data
    await seedBlogs();
    console.log('\n BLOGS SEEDED \n');

    //End node.js process with no failures
    process.exit(0); 
};

seedAll();


