const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

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
                    attributes: ['username'],
                },
            ],     
        });

        const commentData = await Comment.findAll({
            where: {
                blog_id: blogData.id //Finds all comments on requested blog
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });

        const comments = commentData.map((comment) =>
        comment.get({ plain: true })
        );

        const isOwner = req.session.user.id === blogData.user_id;
        const blog = blogData.get({plain:true});
        res.render('blog-page', {blog, comments, loggedIn: req.session.loggedIn, isOwner});

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

router.get('/dashboard', async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            raw:true,
            where: {
                user_id: req.session.user.id,
                },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        // const blog = blogData.get({plain: false});

        res.render('dashboard', {blogs, loggedIn: req.session.loggedIn});
    } catch (error) {
        
    }
});

module.exports = router;
