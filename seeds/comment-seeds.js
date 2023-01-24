const { Comment } = require('../models');

const commentData = [
    {
        text: 'This blog rocks!',
        user_id: 2,
        blog_id: 1,
    },
    {
        text: 'I like this blog ton! Thank you.',
        user_id: 1,
        blog_id: 3,
    },
    {
        text: 'Terrible job, you suck!',
        user_id: 3,
        blog_id: 2,
    },
    {
        text: 'I disagree with your opinions.',
        user_id: 1,
        blog_id: 3,
    },
    {
        text: 'Great job, amazing article!',
        user_id: 1,
        blog_id: 3,
    },
    {
        text: 'Cool!',
        user_id: 1,
        blog_id: 2,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;