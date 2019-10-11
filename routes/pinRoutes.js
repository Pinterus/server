const router = require('express').Router()
const pinController = require('../controllers/PinController')
const {authentication, authorization} = require('../middlewares/auth')

router.use(authentication)

router.post('/pin', pinController.add)
router.get('/pin', pinController.show)
router.delete('/pin/:id', authorization, pinController.delete)

module.exports = router