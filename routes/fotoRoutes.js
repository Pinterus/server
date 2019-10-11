const router = require('express').Router()
const fotoController = require('../controllers/FotoController')
const upload = require('../helpers/upload')

router.get('/import', fotoController.import)
router.get('/random', fotoController.getRandom)
router.get('/search', fotoController.searchImages)
router.post('/upload',  upload.multer.single('image'), upload.sendUploadToGCS, fotoController.getLinkUploaded)

module.exports = router