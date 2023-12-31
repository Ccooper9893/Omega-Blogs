const { User } = require('../models');

const userData = [
    {
        username: 'Cody',
        password: 'password123',
        email: 'cody@email.com'
    },
    {
        username: 'Tom Cruise',
        password: 'password123',
        email: 'cruise@email.com'
    },
    {
        username: 'Donnie Yen',
        password: 'password123',
        email: 'donnie@email.com'
    }
];

const seedUsers = () => User.bulkCreate(userData); //, { individualHooks: true }

module.exports = seedUsers;