const router = require('express').Router()
const fotoController = require('../controllers/FotoController')

router.get('/import', fotoController.import)
router.get('/random', fotoController.getRandom)
router.get('/search', fotoController.searchImages)

module.exports = router