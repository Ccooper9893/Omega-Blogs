const { User } = require('../models');

const userData = [
    {
        username: 'Codyducker',
        password: 'password123',
        email: 'cody@email.com'
    },
    {
        username: 'StinkleArdum',
        password: 'password123',
        email: 'stinkle@email.com'
    },
]

const seedUsers = () => User.bulkCreate(userData); //, { individualHooks: true }

module.exports = seedUsers;