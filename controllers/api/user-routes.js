const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {model: User},
                    {model: Comment},
                ],
            },
        )
        res.status(200).json(blogData)
    } catch (error) {
        res.status(500).json(error)
    }
    
});

module.exports = router;