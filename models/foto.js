const mongoose = require('mongoose')

let Schema = mongoose.Schema

let fotoSchema = new Schema({
    name: {type:String},
    location: {type:String},
    // user: {type: Schema.Types.ObjectId, ref: "users"}
}, {timestamps:true})

let Foto = mongoose.model('Foto',fotoSchema)

module.exports = Foto