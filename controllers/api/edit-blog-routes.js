const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const isAuth = require('../../utils/auth');

//Create and Post new blog
router.post('/new', isAuth, async (req, res) => {

    try {
        const newBlog = await Blog.create({
            title: req.body.blogTitle,
            blog_body: req.body.blogBody,
            user_id: req.session.user.id,
        });

        if(!newBlog) {
            res.status(400).json({message: "Insufficient data!"});
            return;
        };
        res.status(200).json({message: 'Your blog has been created!'});

    } catch (error) {
        res.status(500).json(error)
    };
});

//Update Blog
router.post('/edit', isAuth, async (req, res) => {

    try {
        const blog = await Blog.findOne({ where: { id: req.body.blogId } });

        blog.set({
            title: req.body.newTitle,
            blog_body: req.body.newBody,
        });

        blog.save();

        if (!blog) {
            res.status(400).json({message: 'There has been an error updating the blog.'})
        };

        res.status(202).json({message: 'Blog has been updated.'})
    } catch (error) {
        res.status(500).json(error);
    };
});

module.exports = router;