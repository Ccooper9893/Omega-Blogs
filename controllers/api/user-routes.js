const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const isAuth = require('../../utils/auth')
//Create new user
router.post('/signup', async (req, res) => {
    try {
        const newUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        if (!newUserData) {
            res.status(400).json({message: 'Insufficient data'});
            return;
        }

        res.status(202).json({message: 'Your account has been created!'});
        // req.session.save(() => {
        //     req.session.loggedIn = true;
        //     req.session.user = newUserData; //Saves data to session
        //     res.status(201).json({message: 'Your account has been created!'});
            
        // });

    } catch (error) {
        res.status(500).json(error);
    };
});

//User Sign in
router.post('/signin', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        
        //If user does not exist
        if(!userData) {
            res.status(400).json({message: 'Invalid username/password. Please try again!'});
            return;
        };
        
        //Validating password
        const validPassword = await userData.validatePassword(req.body.password);
        if(!validPassword) {
           res.status(400).json({message: 'Invalid username/password. Please try again!'});
           return;
        };

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = userData;
            res.status(200).json({message: userData});
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
    });

//User Sign Out
router.post('/signout', isAuth, (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy((err) => {
            if(err) {
                console.log(err)
            } else {
                res.status(204).end();
            }
        });
    } else {
        res.status(400).end();
    }
});

//Post blog
router.post('/newblog', isAuth, async (req, res) => {

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
router.post('/edit/:id', isAuth, async (req, res) => {

    try {

        const blog = await Blog.findOne({ where: { id: req.params.id } });
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

//Post comment
router.post('/comment/:id', isAuth, async (req, res) => {
    try {
        const newComment = Comment.create({
            text: req.body.comment,
            blog_id: req.params.id,
            user_id: req.session.user.id,
        });

        if(!newComment) {
            res.status(400).json({message: 'There has been an error posting your comment.'});
            return;
        };

        res.status(200).json({message: 'Your comment has been posted.'});
    } catch (error) {
        res.status(500).json(error);
    };
});

module.exports = router;
