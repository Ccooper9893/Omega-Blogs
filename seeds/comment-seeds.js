const { Comment } = require('../models');

const commentData = [
    {
        text: 'This blog rocks!',
        user_id: 2,
        blog_id: 1,
    },
    {
        text: 'I like this blog',
        user_id: 1,
        blog_id: 3,
    },
    {
        text: 'I dont like this blog',
        user_id: 3,
        blog_id: 4,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;