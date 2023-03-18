const router = require('express').Router()
const apiRoutes = require('./api')
const dashRoutes = require('./dashRoutes')
const homeRoutes = require('./homeRoutes')

router.use('/api', apiRoutes)
router.use('/home', homeRoutes)
// router.use('/dashboard', dashRoutes)

module.exports = router