const Pin = require('../models/pin')
const axios = require('axios')

class FotoController {
    static add(req, res, next){
        let {name, location} = req.body
        Pin.create({
            title,
            content,
            user: req.loggedUser._id
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(next)
    }
    static show(req, res, next){
        Pin.find({user:req.loggedUser._id})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
    static delete(req, res, next){
        Pin.deleteOne({_id:req.params.id})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}
module.exports = FotoController