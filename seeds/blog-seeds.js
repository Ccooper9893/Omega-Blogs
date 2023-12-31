const { Blog } = require('../models');

const blogData = [
    {
        title: 'The Power of Positive Thinking',
        blog_body: 'Positive thinking is not just a fleeting emotion; it\'s a powerful force that can profoundly impact your mental and physical well-being. In this comprehensive exploration, we delve into the scientific underpinnings of positivity. From the neurological changes associated with a positive mindset to the cascading health benefits, discover how cultivating optimism can lead to a happier and healthier life. Uncover practical strategies for integrating positive thinking into your daily routine and witness the transformative effects on your overall well-being.',
        user_id: 1
      },
      {
        title: 'Discovering Hidden Gems in Bookstores',
        blog_body: 'Bookstores, beyond being mere repositories of books, are veritable treasure troves of knowledge and imagination. Join me on an immersive journey as we uncover the enchanting world of hidden literary gems. From the quiet corners of classic novels to the vibrant landscapes of contemporary poetry, this exploration goes beyond mainstream bestsellers. Learn how to navigate bookstores with a discerning eye, discovering literary treasures that may have eluded widespread attention. There\'s always something new to explore, and the joy of discovery awaits avid readers.',
        user_id: 2
      },
      {
        title: 'The Science of Sleep: Unlocking Its Mysteries',
        blog_body: 'Sleep, a fundamental aspect of our well-being, harbors complexities that often elude our understanding. In this in-depth exploration, we embark on a journey into the science of sleep. Delve into the intricacies of the sleep cycle, unravel the importance of quality rest, and glean practical tips for achieving a rejuvenating night\'s sleep. From the mysteries of REM sleep to the impact of sleep hygiene on overall health, this post provides valuable insights into enhancing the quality of your sleep.',
        user_id: 3
      },
      {
        title: 'Embracing Minimalism for a Fulfilling Life',
        blog_body: 'In a world characterized by constant distractions, minimalism emerges as a guiding philosophy for cultivating a more intentional and fulfilling life. Join me on a transformative journey as we explore the principles of minimalism, from simplifying physical surroundings to decluttering the mind. Discover how embracing minimalism can lead to increased clarity, heightened focus, and a profound sense of overall happiness. Practical tips and real-life examples illustrate the art of living with less for a more meaningful existence.',
        user_id: 1
      },
      {
        title: 'The Impact of Technology on Human Connection',
        blog_body: 'Technology, a powerful force in bringing people together, simultaneously reshapes the nature of human connection. This insightful exploration navigates the positive and negative effects of technology on relationships, communication, and the sense of community in the digital age. From the dynamics of online friendships to the challenges posed by constant connectivity, gain a nuanced understanding of the evolving landscape of human connection in our technologically-driven world.',
        user_id: 2
      },
      {
        title: 'Exploring National Parks: A Nature Lover\'s Guide',
        blog_body: 'National parks, nature\'s sanctuaries, beckon with breathtaking landscapes and diverse ecosystems. Join me on a virtual expedition through some of the world\'s awe-inspiring national parks, celebrating the beauty of the great outdoors. From the iconic wonders of Yosemite to the untouched splendor of Banff, this guide offers a nature lover\'s perspective on exploring these natural wonders. Discover tips for planning your own adventure and fostering a deeper appreciation for the richness of our planet.',
        user_id: 3
      },
      {
        title: 'The Art of Time Management in a Busy World',
        blog_body: 'In a world that seems to accelerate with each passing day, mastering the art of time management is key to personal and professional success. This comprehensive guide explores practical tips, effective techniques, and essential tools to help you prioritize tasks, stay organized, and make the most of your valuable time. From the Pomodoro Technique to digital productivity tools, learn how to navigate the demands of a fast-paced world while maintaining balance and focus.',
        user_id: 1
      },
      {
        title: 'Culinary Adventures: Exploring Global Cuisines',
        blog_body: 'Embark on a tantalizing journey into the world of international flavors and culinary traditions. From the vibrant street food markets of Asia to the sophisticated gourmet delights of Europe, join me on a gastronomic expedition that transcends borders. This exploration goes beyond recipes, delving into the cultural and historical contexts that shape global cuisines. Expand your palate, discover hidden culinary gems, and bring the richness and diversity of global flavors into your own kitchen.',
        user_id: 2
      },
      {
        title: 'The Impact of Exercise on Mental Health',
        blog_body: 'Physical activity, often extolled for its benefits to the body, plays an equally crucial role in maintaining mental health. This insightful post explores the intricate connection between exercise and mental well-being. From the release of endorphins to the long-term cognitive benefits, discover how incorporating movement into your routine can elevate mood, reduce stress, and contribute to a more resilient mind. Practical tips and evidence-based insights guide you on a journey toward holistic well-being.',
        user_id: 3
      },
      {
        title: 'Unveiling the Beauty of Artisanal Craftsmanship',
        blog_body: 'In a world dominated by mass production, artisanal craftsmanship emerges as a beacon of authenticity, skill, and creativity. Join me in a celebration of the beauty found in handmade goods and the artisans who bring them to life. This exploration goes beyond aesthetics, delving into the stories of craftsmanship, the dedication of artisans, and the unique qualities that make each handmade piece a work of art. From traditional techniques to contemporary expressions, discover the enduring allure of artisanal craftsmanship.',
        user_id: 1
      }
];

const seedBlogs = () => Blog.bulkCreate(blogData);
module.exports = seedBlogs;

