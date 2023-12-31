const { Blog } = require('../models');

const blogData = [
    {
        title: 'The Power of Positive Thinking',
        blog_body: 'Positive thinking can have a profound impact on your mental and physical well-being. In this post, we explore the science behind positivity and how cultivating a positive mindset can lead to a happier and healthier life.',
        user_id: 1
      },
      {
        title: 'Discovering Hidden Gems in Bookstores',
        blog_body: 'Bookstores are treasure troves of knowledge and imagination. Join me on a journey to uncover lesser-known literary gems that may have escaped mainstream attention. From classic novels to contemporary poetry, there\'s always something new to explore!',
        user_id: 2
      },
      {
        title: 'The Science of Sleep: Unlocking Its Mysteries',
        blog_body: 'Sleep is essential for our well-being, yet its complexities remain a mystery. In this post, we delve into the science of sleep, exploring the stages of the sleep cycle, the importance of quality rest, and tips for achieving a good night\'s sleep.',
        user_id: 3
      },
      {
        title: 'Embracing Minimalism for a Fulfilling Life',
        blog_body: 'In a world filled with constant distractions, minimalism offers a path to a more intentional and fulfilling life. Learn how simplifying your surroundings and decluttering your mind can lead to increased clarity, focus, and overall happiness.',
        user_id: 1
      },
      {
        title: 'The Impact of Technology on Human Connection',
        blog_body: 'While technology has brought us closer in many ways, it has also changed the nature of human connection. Explore the positive and negative effects of technology on relationships, communication, and the sense of community in the digital age.',
        user_id: 2
      },
      {
        title: 'Exploring National Parks: A Nature Lover\'s Guide',
        blog_body: 'National parks are a haven for nature enthusiasts, offering breathtaking landscapes and diverse ecosystems. Join me as we embark on a virtual journey through some of the most awe-inspiring national parks, celebrating the beauty of the great outdoors.',
        user_id: 3
      },
      {
        title: 'The Art of Time Management in a Busy World',
        blog_body: 'In a fast-paced world, effective time management is crucial for personal and professional success. Discover practical tips, techniques, and tools to help you prioritize tasks, stay organized, and make the most of your valuable time.',
        user_id: 1
      },
      {
        title: 'Culinary Adventures: Exploring Global Cuisines',
        blog_body: 'Dive into the world of international flavors and culinary traditions. From street food in Asia to gourmet delights in Europe, join me on a gastronomic journey as we explore the richness and diversity of global cuisines.',
        user_id: 2
      },
      {
        title: 'The Impact of Exercise on Mental Health',
        blog_body: 'Physical activity is not only beneficial for the body but also plays a crucial role in maintaining mental health. Explore the connection between exercise and mental well-being, and discover how incorporating movement into your routine can boost mood and reduce stress.',
        user_id: 3
      },
      {
        title: 'Unveiling the Beauty of Artisanal Craftsmanship',
        blog_body: 'In a world dominated by mass production, artisanal craftsmanship stands out as a testament to skill, dedication, and creativity. Join me in celebrating the beauty of handmade goods and the artisans who bring them to life.',
        user_id: 1
      }
];

const seedBlogs = () => Blog.bulkCreate(blogData);
module.exports = seedBlogs;

