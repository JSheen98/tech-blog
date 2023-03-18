const router = require('express').Router()
const { User, Blog, Comment } = require('../models')
const withAuth = require('../utils/auth')

// localhost:3001/home

// Render blogs on the homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll()

        const blogs = blogData.map((blog) => blog.get({ plain: true }))

        res.render('homepage', { blogs })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Should render one blog, by id
router.get('/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
               {
                model: User,
                attributes: ['username']
               } 
            ]
        })

        const blog = blogData.get({ plain: true })

        res.render('blog', {blog} )
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router