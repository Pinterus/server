const Foto = require('../models/foto')
const axios = require('axios')

class FotoController {
    static import(req, res, next){

    }

    static getRandom(req, res, next) {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/photos/random/?count=8`,
            headers: {
                Authorization: 'Client-ID '+process.env.SECRET_UNSPLASH
            }
        })
            .then(img_data => {
                // console.log(img_data)
                res.status(200).json(img_data.data)
            })
            .catch(err => {
                // console.log('masuk catch')
                next(err)
            })
    }

    static searchImages(req, res, next) {
        // https://api.unsplash.com/search/photos?page=1&query=football
        // console.log(req.query)
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos?page=1&query=${req.query.keyword}&count=8`,
            headers: {
                Authorization: 'Client-ID '+process.env.SECRET_UNSPLASH
            }
        })
            .then(img_datas => {
                res.status(200).json(img_datas.data)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = FotoController