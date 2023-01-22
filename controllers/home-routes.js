const router = require('express').Router();
const { Blog, User } = require('../models');

//Homepage Route 
router.get('/', async (req, res) => {
    console.log('Homepage route');

    try {
        const blogs = await Blog.findAll({
            raw: true,
            include: [
                {
                  model: User,
                  attributes: ['username'],
                },
              ],
        });
        console.log(blogs);
        res.render('homepage', {blogs})

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            raw: false,
            include: {model: User},      
        });
        
        const blog = blogData.get({plain:true})
        console.log(typeof blog.createdAt);
        console.log(blog.createdAt);
        date = blog.createdAt
        console.log(date.toLocaleDateString());
        res.render('blog-page', {blog});
    } catch (error) {
        res.status(400).json(error)
    };
    // res.render('blog-page', {blog})
});

router.get('/login', (req, res) => {
    //Check to see if user is already logged in
    res.render('login-page')
})

router.get('/signup', (req, res) => { 
    res.render('signup-page');
});

router.get('/dashboard', (req, res) => {
});

module.exports = router;
