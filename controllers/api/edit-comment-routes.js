const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const isAuth = require('../../utils/auth');

//Delete comment
router.post('/delete', isAuth, async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            raw: true,
            nest: true,
            where: {
                id: req.body.commentId, user_id: req.session.user.id,
            },
        });

        if(!deleteComment) {
            res.status(400).json({message: 'Error in finding comment.'});
            return;
        };

        res.status(200).json({message: 'Comment has been deleted.'});
    } catch (error) {
        res.status(500).json(error);
    }
});

//Edit comment
router.post('/edit', isAuth, async (req, res) => {
    try {
        const editComment = await Comment.findByPk(req.body.editCommentId);

        editComment.set({
            text: req.body.commentInput,
        });
        editComment.save(); 

        if(!editComment) {
            res.status(400).json({message: 'There has been an error updating your comment'});
        }

        res.status(200).json({message: 'Successfully updated comment.'});
    } catch (error) {
        res.status(500).json(error);
    };
});

//Post comment
router.post('/:id', isAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
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