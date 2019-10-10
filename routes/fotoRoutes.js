const router = require('express').Router()
const fotoController = require('../controllers/FotoController')

router.get('/import', fotoController.import)

module.exports = router