const router = require('express').Router()
const fotoController = require('../controllers/FotoController')
const upload = require('../helpers/upload')

router.get('/getall', fotoController.getall)
router.get('/random', fotoController.getRandom)
router.get('/search', fotoController.searchImages)
router.post('/upload',  upload.multer.single('image'), upload.sendUploadToGCS, fotoController.getLinkUploaded)

module.exports = router