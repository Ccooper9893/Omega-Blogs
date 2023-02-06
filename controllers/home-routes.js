const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const isAuth = require('../utils/auth');

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

        res.render('homepage', {blogs, loggedIn: req.session.loggedIn})

    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/blog/:id', isAuth, async (req, res) => {

    try { //Grabbing blog by primary key id
        const blogData = await Blog.findByPk(req.params.id, {
            raw: false,
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],     
        });

        //Grabbing all comments associated with the blog
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
        
        //Maps comments and returns new array
        const comments = commentData.map((comment) =>
        comment.get({ plain: true })//Converts entity to plain js object
        );

        const isOwner = req.session.user.id === blogData.user_id;//Checks if blog is owned by current user
        const blog = blogData.get({plain:true});
        res.render('blog-page', {blog, comments, loggedIn: req.session.loggedIn, isOwner});

    } catch (error) {
        res.status(400).json(error)
    };
});

router.get('/login', (req, res) => {
    res.render('login-page')
});

router.get('/signup', (req, res) => { 
    res.render('signup-page');
});

router.get('/dashboard', isAuth, async (req, res) => {

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
                },
            ],
        });

        res.render('dashboard', {blogs, loggedIn: req.session.loggedIn});

    } catch (error) {
        res.status(400).json(error);
    };
});

router.get('/newblog', (req, res) => {
    res.render('blog-create');
});

router.get('/edit/:id', isAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: 'No blog with that id!'});
            return;
        };
        const blog = blogData.get({plain: true});
        res.render('blog-edit', {blog});
    } catch (error) {
        res.status(500).json(error);
    }
    
});

module.exports = router;
