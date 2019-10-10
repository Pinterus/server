const router = require('express').Router()
// const userRoutes = require('./userRoutes')
const fotoRoutes = require('./fotoRoutes')

// router.use('/user',userRoutes)
router.use('/',fotoRoutes)

module.exports = router