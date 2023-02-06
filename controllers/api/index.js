const router = require('express').Router();
const userRoutes = require('./user-routes');
const editBlogRoutes = require('./edit-blog-routes');
const editCommentRoutes = require('./edit-comment-routes');

router.use('/user', userRoutes);
router.use('/blog', editBlogRoutes);
router.use('/comment', editCommentRoutes);

module.exports = router;