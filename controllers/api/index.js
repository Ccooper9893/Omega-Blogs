const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/test', userRoutes);

module.exports = router;