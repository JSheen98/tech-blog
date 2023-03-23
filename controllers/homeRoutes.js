const router = require('express').Router()
const { User, Blog, Comment } = require('../models')

// localhost:3001/

// Render blogs on the homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll()

        const blogs = blogData.map((blog) => blog.get({ plain: true }))

        res.render('homepage', { blogs, logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Render login screen
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        
        return
    }

    res.render('login' )
})

// Render sign up screen
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }
    
    res.render('signup')
})

// Should render one blog, by id
router.get('/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
               {
                model: User,
                attributes: ['username']
               }, 
               {
                model: Comment,
                include: [
                    {
                        model: User
                    }
                ]
               }
            ]
        })

        const blog = blogData.get({ plain: true })

        console.log(blog)

        res.render('blog', { blog,  logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router