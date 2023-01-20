const { Blog } = require('../models');

const blogData = [
    {
        title: 'Gaming is good for your health',
        blog_body: 'Gaming can potentially provide many skills that can help in everyday life. This includes pattern recognition, hand-eye coordination, and critical thinking.',
        user_id: 1
    },
    {
        title: 'Games you should not buy for your kids.',
        blog_body: 'GTA, Call of Duty, Fortnite',
        user_id: 2
    },
    {
        title: 'Games you should buy today!',
        blog_body: 'Subnautica, Don\'t starve together, Surviving Mars',
        user_id: 1
    }
];

const seedBlogs = () => Blog.bulkCreate(blogData);
module.exports = seedBlogs;

