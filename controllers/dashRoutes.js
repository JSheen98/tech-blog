const router = require('express').Router()
const { User, Blog, Comment } = require('../models')
const withAuth = require('../utils/auth')

// localhost:3001/dashboard

router.get('/', withAuth, async (req, res) => {
    try {
        const userBlogs = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            where: {
                user_id: req.session.user_id
            }
        })

        const blogs = userBlogs.map((blog) => blog.get({ plain: true }))

        res.render('dashboard', { blogs })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router