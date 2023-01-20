const { Comment } = require('../models');

const commentData = [
    {
        text: 'This blog rocks!',
        user_id: 2,
    },
    {
        text: 'I like this blog',
        user_id: 1,
    },
    {
        text: 'I dont like this blog',
        user_id: 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;