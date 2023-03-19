const router = require('express').Router()
const { Blog } = require('../../models')
const withAuth = require('../../utils/auth')

// localhost:3001/api/blog

// Blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newBlog)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Blog update
router.put('/:id', withAuth, async(req, res) => {
    try {
        const blogData = await Blog.update(
            {
                ...req.body,
                user_id: req.session.user_id,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id' })
            return
        }

        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Blog delete
router.delete('/:id', withAuth, async(req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id' })
            return
        }

        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router