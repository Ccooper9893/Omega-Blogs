const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

//Create new user
router.post('/signup', async (req, res) => {
    try {
        const newUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
    
        req.session.save(() => {
            req.session.loggedIn = true;
        });
    
        res.status(201).json(newUserData);

    } catch (error) {
        res.status(500).json(error);
    };
});

//User Sign in
router.post('/signin', async (res, req) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if(!userData) {
            res.status(400).json({message: 'Invalid username/password. Please try again!'});
            return;
        };


    } catch (error) {
        res.status(500).json(error);
    };
});
//Post blog

//Post comment

module.exports = router;