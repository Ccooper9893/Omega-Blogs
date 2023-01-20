const router = require('express').Router();
const { Blog, User } = require('../models');

//Homepage Route 
router.get('/', (req, res) => {
    console.log('Homepage route');
});

router.get('/signup', (req, res) => {
    //Display signup bootstrap module
})

router.get('/login', (req, res) => {
    //Display login bootstrap module
});

router.get('/dashboard', (req, res) => {
    //Display dashboard
});

module.exports = router;
