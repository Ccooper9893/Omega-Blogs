const { Comment } = require('../models');

const commentData = [
    {
        text: 'This article inspired me to adopt a more positive mindset. Thank you for the insightful content!',
        user_id: 2,
        blog_id: 1,
      },
      {
        text: 'I never realized how much I enjoy exploring bookstores until I read your post. Can\'t wait to discover hidden gems!',
        user_id: 3,
        blog_id: 2,
      },
      {
        text: 'The science of sleep is fascinating! Your post provided valuable information and practical tips. I\'m looking forward to better sleep!',
        user_id: 1,
        blog_id: 3,
      },
      {
        text: 'I\'ve started decluttering my space after reading about minimalism here. It truly makes a difference in my daily life. Thanks!',
        user_id: 2,
        blog_id: 4,
      },
      {
        text: 'Your exploration of the impact of technology resonates with my experiences. It\'s a thought-provoking read!',
        user_id: 3,
        blog_id: 5,
      },
      {
        text: 'I\'m planning a trip to a national park now! Your vivid descriptions ignited my wanderlust. Great post!',
        user_id: 1,
        blog_id: 6,
      },
      {
        text: 'Time management has been a struggle for me, and your post provided practical strategies. Thank you!',
        user_id: 2,
        blog_id: 7,
      },
      {
        text: 'Your culinary adventures series is making me hungry! Can\'t wait to try some global cuisines. Keep it up!',
        user_id: 3,
        blog_id: 8,
      },
      {
        text: 'I started incorporating exercise into my routine, and I already feel the positive effects on my mental health. Your post was motivating!',
        user_id: 1,
        blog_id: 9,
      },
      {
        text: 'Artisanal craftsmanship is truly a form of art. Your appreciation for handmade goods is evident in your writing. Well done!',
        user_id: 2,
        blog_id: 10,
      },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;