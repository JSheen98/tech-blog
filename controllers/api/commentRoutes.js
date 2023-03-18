const router = require('express').Router()
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth')

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