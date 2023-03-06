const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const isAuth = require('../utils/auth');

//Create new blog page
router.get('/new', isAuth, (req, res) => {
    res.render('blog-create');
});

//Render blog edit page
router.get('/edit/:id', isAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: 'No blog with that id!'});
            return;
        };
        const blog = blogData.get({plain: true});
        res.render('blog-edit', {blog, loggedIn: req.session.loggedIn});
    } catch (error) {
        res.status(500).json(error);
    }
});

//Display specific Blog
router.get('/:id', async (req, res) => {

    try { //Grabbing blog by primary key id
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],     
        });

        //Grabbing all comments associated with the blog
        const commentData = await Comment.findAll({
            raw: true,
            nest: true,
            where: {
                blog_id: blogData.id //Finds all comments on requested blog
            },
            include: [
                {
                    model: User,
                    attributes: { exclude: ['email', 'password'] }
                    // attributes: { exclude: [password, email]}
                },
            ],
        });

        //Maps comments and returns new array
        const comments = commentData.map((comment) => {
            if(comment.user_id === req.session.user?.id) {
                comment.isOwner = true;
            };
            return comment;
        });

       // const isOwner = req.session.user.id === blogData.user_id;//Checks if blog is owned by current user
        const isOwner = req.session.user?.id === blogData.user_id;//Checks if blog is owned by current user
        const blog = blogData.get({plain:true});
        res.render('blog-page', {blog, comments, loggedIn: req.session.loggedIn, isOwner});

    } catch (error) {
        res.status(400).json(error)
    };
});

module.exports = router;