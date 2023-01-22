const router = require('express').Router();
const { Blog, User } = require('../models');

//Homepage Route 
router.get('/', async (req, res) => {
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
        // console.log(blogs);
        res.render('homepage', {blogs, loggedIn: req.session.loggedIn})

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            raw: false,
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],      
        });

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        const blog = blogData.get({plain:true})
        res.render('blog-page', {blog, loggedIn: req.session.loggedIn});

    } catch (error) {
        res.status(400).json(error)
    };
});

router.get('/login', (req, res) => {
    res.render('login-page')
})

router.get('/signup', (req, res) => { 
    res.render('signup-page');
});

router.get('/dashboard', (req, res) => {
});

module.exports = router;
