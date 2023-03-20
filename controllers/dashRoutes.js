const router = require('express').Router()
const { User, Blog, Comment } = require('../models')
const { findByPk } = require('../models/User')
const withAuth = require('../utils/auth')

// localhost:3001/dashboard

// Gets all posts created by the logged in user
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

        res.render('dashboard', { blogs, logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get route to render 'create-blog' handlebars
router.get('/create', withAuth, async (req, res) => { res.render('create-blog', { logged_in: req.session.logged_in } ) })

// Get route to render 'edit-blog' handlebars
router.get('/:id/edit', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id)

        const blog = blogData.get({ plain: true })

        res.render('edit-blog', { blog, logged_in: req.session.logged_in })

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router