const router = require('express').Router()
const userRoutes = require('./userRoutes')
const fotoRoutes = require('./fotoRoutes')
const pinRoutes = require('./pinRoutes')

router.use('/',userRoutes)
router.use('/',fotoRoutes)
router.use('/',pinRoutes)

module.exports = router