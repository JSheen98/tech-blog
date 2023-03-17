const router = require('router').Router()
const userRoutes = require('./userRoutes')

router.use('/users', userRoutes)

module.exports = router