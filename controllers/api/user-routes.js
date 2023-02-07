const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const isAuth = require('../../utils/auth');

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
            res.status(404).json({message: 'Invalid username/password.'})
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
            res.status(200).json({message: 'Successfully logged in!'});
        });

    } catch (error) {
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

module.exports = router;
