const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const isAuth = require('../utils/auth');

//Home Page 
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

//Login Page
router.get('/login', (req, res) => {
    res.render('login-page')
});

//Signup Page
router.get('/signup', (req, res) => { 
    res.render('signup-page');
});

//Dashboard Page
router.get('/dashboard', isAuth, async (req, res) => {

    try {
        const userBlogs = await Blog.findAll({
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
        
        res.render('dashboard', {userBlogs, loggedIn: req.session.loggedIn});

    } catch (error) {
        res.status(400).json(error);
    };
});


module.exports = router;
