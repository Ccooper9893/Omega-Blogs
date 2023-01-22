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
            req.session.user = newUserData; //Saves data to session
            res.status(201).json({newUserData});
        });

    } catch (error) {
        res.status(500).json(error);
    };
});

//User Sign in
router.post('/signin', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        console.log(userData);
        //If user does not exist
        if(!userData) {
            res.status(400).json({message: 'Invalid username/password. Please try again!'});
            return;
        };
        
        //Validating password
        const validatePassword = await User.checkPassword(req.body.password);
        if(!validatePassword) {
           res.status(400).json({message: 'Invalid username/password. Please try again!'});
           return;
        };

        req.session.save(() => {
            req.session. loggedIn = true;
            req.session.user = userData;
        });

        res.status(200).json({ message: 'You are now logged in!' })

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
});
//Post blog

//Post comment

module.exports = router;