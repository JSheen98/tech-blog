const router = require('express').Router()
const { Comment, User } = require('../../models')
const withAuth = require('../../utils/auth')

// localhost:3001/api/comment

// Render comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        const comments = commentData.map((comment) => comment.get({ plain: true }))

        res.render('blog', {comments})
    } catch (err) {
        res.status(500).json(err)
    }
})

// Comment post
router.post('/', withAuth, async (req, res) =>{
    try {
        const newComment = await Comment.create({
            contents: req.body.contents,
            user_id: req.session.user_id
        })
        res.status(200).json(newComment)
    } catch (err) { 
        res.status(500).json(err)
    }
})

module.exports = router