const { Comment } = require('../models');

const commentData = [
    {
        text: 'This blog rocks!',
    },
    {
        text: 'I like this blog',
    },
    {
        text: 'I dont like this blog'
    }
];

const seedComments = Comment.bulkCreate(commentData);

module.exports = seedComments;