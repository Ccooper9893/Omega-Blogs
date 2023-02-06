//Importing express router method
const router = require('express').Router();

//Importing routers
const homePage = require('./home-routes');
const apiRoute = require('./api');
const blogRoute = require('./blog-routes');

//Middleware for routes
router.use('/', homePage);
router.use('/api', apiRoute);
router.use('/blog', blogRoute);

//Exporting router to server.js
module.exports = router;