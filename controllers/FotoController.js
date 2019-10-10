const Foto = require('../models/foto')
const axios = require('axios')

class FotoController {
    static import(req, res, next){

    }

    static getRandom(req, res, next) {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/photos/random/`,
            headers: {
                Authorization: 'Client-ID f2758eaab74509bb327a64ea3b4a54a78c3f5b35617cd9d2cd647c921183cc65' //Sementara
            }
        })
            .then(img_data => {
                console.log(img_data)
                res.status(200).json(img_data.data)
            })
            .catch(err => {
                console.log('masuk catch')
                next(err)
            })
    }

    static searchImages(req, res, next) {
        // https://api.unsplash.com/search/photos?page=1&query=football
        console.log(req.query)
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos?page=1&query=${req.query.keyword}`,
            headers: {
                Authorization: 'Client-ID f2758eaab74509bb327a64ea3b4a54a78c3f5b35617cd9d2cd647c921183cc65' //Sementara
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