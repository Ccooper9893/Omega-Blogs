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

        if(!newUserData) {
            res.status(400).json({message: 'Please provide the required information!'});
            return;
        };

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = newUserData;
            res.status(201).json(newUserData);
        });

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

        const validatePassword = await User.checkPassword(req.body.password);

        if(!validatePassword) {
            res.status(400).json({ message: 'Invalid username/password. Please try again!' })
        }

    } catch (error) {
        res.status(500).json(error);
    };
});
//Post blog

//Post comment

module.exports = router;